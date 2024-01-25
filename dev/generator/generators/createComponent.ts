import { select } from '@inquirer/prompts'

import {
  ROOT_PATH,
  COMPONENTS_TEMPLATES_PATH,
  COMPONENTS_TEMPLATES_FILES,
  COMPONENTS_LIST,
  COMPONENTS_PATH,
  COMPONENT_TYPE_CHOICES
} from '../lib/constants'
import { warningLog, errorLog } from '../lib/messages'
import { generateFilesFromTemplate } from '../lib/utils'

const createComponent = async (name: string) => {
  if (COMPONENTS_LIST.includes(name)) {
    errorLog(
      `The component "${name}" already exist. Please chose a different name.`
    )
    return
  }

  warningLog(
    `Please answer some questions before create the component "${name}":`
  )

  const locationChoices = [ROOT_PATH, ...COMPONENTS_LIST].map((each) => ({
    name: each,
    value: each
  }))

  const typeChoices = COMPONENT_TYPE_CHOICES.map((each) => ({
    name: each,
    value: each
  }))

  const choseComponentLocation = await select({
    message: 'Where to create this new component?',
    choices: locationChoices
  })

  const choseComponentType = await select({
    message:
      choseComponentLocation === ROOT_PATH
        ? 'What section in the Storybook navigation to include this new component stories?'
        : `What section in the Storybook navigation the parent component "${choseComponentLocation}" is located:`,
    choices: typeChoices
  })

  generateFilesFromTemplate({
    type: 'component',
    name,
    answers: {
      choseComponentLocation,
      choseComponentType
    },
    path: COMPONENTS_PATH,
    templatePath: COMPONENTS_TEMPLATES_PATH,
    templateFiles: COMPONENTS_TEMPLATES_FILES
  })
}

export default createComponent
