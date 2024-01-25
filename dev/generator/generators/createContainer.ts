import { select } from '@inquirer/prompts'

// inquirer.registerPrompt('search-list', require('inquirer-search-list'))

import {
  ROOT_PATH,
  CONTAINERS_TEMPLATES_PATH,
  CONTAINERS_TEMPLATES_FILES,
  CONTAINERS_LIST,
  CONTAINERS_PATH,
} from '../lib/constants'
import { warningLog, errorLog } from '../lib/messages'
import { generateFilesFromTemplate } from '../lib/utils'

const createContainer = async (name: string) => {
  if (CONTAINERS_LIST.includes(name)) {
    errorLog(`The container "${name}" already exist. Please chose a different name.`)
    return
  }

  warningLog(`Please answer some questions before create the container "${name}":`)

  const choices = [ROOT_PATH, ...CONTAINERS_LIST].map(each => ({
    name: each,
    value: each,
  }))

  const choseComponentLocation = await select({
    message: 'Where to create this new container?',
    choices,
  })

  generateFilesFromTemplate({
    type: 'container',
    name,
    answers: {
      choseComponentLocation,
    },
    path: CONTAINERS_PATH,
    templatePath: CONTAINERS_TEMPLATES_PATH,
    templateFiles: CONTAINERS_TEMPLATES_FILES,
  })
}

export default createContainer
