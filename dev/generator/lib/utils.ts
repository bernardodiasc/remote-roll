import fs from 'fs'
import chalk from 'chalk'
import ejs from 'ejs'

import { ROOT_PATH } from './constants'
import { successLog, warningLog, infoLog } from './messages'

export const capitalize = (s: string) => (s && s[0].toUpperCase() + s.slice(1)) || ''

interface IAnswers {
  choseComponentLocation: string
  choseComponentType?: string
}

interface IgetTemplateOptions {
  name: string
  answers: IAnswers
  type: string
  isCapitalized?: boolean
}

export const getTemplateOptions = ({ name, answers, type, isCapitalized = true }: IgetTemplateOptions) => {
  const capitalizedName = isCapitalized ? capitalize(name) : name
  const { choseComponentLocation, choseComponentType } = answers
  const isRootComponent = choseComponentLocation === ROOT_PATH
  const parentComponent = isRootComponent ? '' : `${choseComponentLocation}`
  const componentPath = `${isRootComponent ? '' : `${choseComponentLocation}/`}${capitalizedName}`
  const options = {
    type,
    isRootComponent,
    componentName: capitalizedName,
    parentComponent,
    componentPath,
    choseComponentType
  }
  return options
}

interface IOptions {
  type?: string
  isRootComponent?: boolean
  componentName?: string
  parentComponent?: string
  componentPath?: string
  choseComponentType?: string
}

interface IcreateDirectoryContents {
  componentFullPath: string
  options: IOptions
  templatePath?: string
  templateFiles?: string[]
}

export const createDirectoryContents = ({
  componentFullPath,
  options = {},
  templatePath = '',
  templateFiles = [],
}: IcreateDirectoryContents) => {
  templateFiles?.forEach((file: string) => {
    const templateFilePath = `${templatePath}/${file}`
    const templateFilePathStats = fs.statSync(templateFilePath)
    const checkName = file.match(/ComponentName/g)
    let newFile = file

    if (checkName && checkName[0] === 'ComponentName' && options.componentName) {
      newFile = file.replace('ComponentName', options.componentName)
    }

    if (templateFilePathStats.isFile()) {
      const contents = fs.readFileSync(templateFilePath, 'utf8')
      const writePath = `${componentFullPath}/${newFile}`
      const render = ejs.render(contents, options)
      warningLog(`The file ${options.componentPath}/${newFile} is being created...`)
      fs.writeFileSync(writePath, render, 'utf8')
    } else if (templateFilePathStats.isDirectory()) {
      fs.mkdirSync(`${componentFullPath}/${newFile}`)
      createDirectoryContents({
        componentFullPath,
        options,
      })
    }
  })
}

interface IgenerateFilesFromTemplate {
  type: string
  name: string
  answers: IAnswers
  path: string
  templatePath: string
  templateFiles: string[]
}

export const generateFilesFromTemplate = ({
  type = 'component',
  name,
  answers,
  path = '',
  templatePath = '',
  templateFiles = []
}: IgenerateFilesFromTemplate) => {
  const options = getTemplateOptions({ name, answers, type })
  const componentFullPath = `${path}${options.componentPath}`
  warningLog(`The  ${options.componentPath} is being created...`)
  fs.mkdirSync(componentFullPath)
  createDirectoryContents({
    componentFullPath,
    options,
    templatePath,
    templateFiles,
  })
  successLog(`The ${type} ${options.componentPath} was created!`)
  if (options.type === 'component') {
    infoLog(`For component showcases, run ${chalk.whiteBright.bgBlueBright(`yarn storybook`)}`)
    if (options.choseComponentType) {
      const storybookSectionRoute = options.choseComponentType.toLowerCase().replace(/ /g, '-')
      const storybookComponentRoute = options.componentPath.toLowerCase().replace('/', '-components-')
      const storybookRoute = `http://localhost:6008/?path=/story/${storybookSectionRoute}-${storybookComponentRoute}--demo`
      infoLog(`Then go to ${chalk.whiteBright.bgBlueBright(storybookRoute)}`)
    }
    infoLog(`For tests, run ${chalk.whiteBright.bgBlueBright(`yarn jest ${options.componentPath}`)}`)
  }
}
