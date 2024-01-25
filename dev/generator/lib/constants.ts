import fs from 'fs'
import path from 'path'

export const ROOT_PATH: string = '/'
export const SRC_DIR: string = `${__dirname}/../../../src/`
export const OUTPUT_DIR: string = path.resolve(__dirname, '../../../src')

export const COMPONENTS_TEMPLATES_PATH: string = `${__dirname}/../templates/component/`
export const COMPONENTS_TEMPLATES_FILES: string[] = fs.readdirSync(COMPONENTS_TEMPLATES_PATH)
export const COMPONENTS_DIR: string = 'components/'
export const COMPONENTS_LIST_WITH_JUNK: string[] = fs.readdirSync(`${SRC_DIR}${COMPONENTS_DIR}`)
export const COMPONENTS_LIST: string[] = COMPONENTS_LIST_WITH_JUNK.filter(path => !(/(^|.\/)\.+[^/.]/g).test(path))
export const COMPONENTS_PATH: string = `${OUTPUT_DIR}/${COMPONENTS_DIR}`

export const COMPONENT_ITEMS = {
  TYPESCRIPT: 'TypeScript',
  STYLES: 'CSS Modules',
  STORYBOOK: 'Storybook stories',
  TESTS: 'Jest tests',
  SAMPLES: 'State samples',
  HELPERS: 'Helper functions'
}
export const COMPONENT_ITEMS_CHOICES = Object.values(COMPONENT_ITEMS)
export const COMPONENT_ITEMS_FILES = {
  [COMPONENT_ITEMS.TYPESCRIPT]: ['index.ts', 'ComponentName.tsx'],
  [COMPONENT_ITEMS.TESTS]: ['ComponentName.test.tsx'],
  [COMPONENT_ITEMS.STYLES]: ['ComponentName.module.css'],
  [COMPONENT_ITEMS.STORYBOOK]: [
    'ComponentName.stories.tsx',
    'Debug.stories.tsx',
    'UseCases.stories.tsx'
  ]
}
export const COMPONENT_TYPE_CHOICES = [
  'Common Components',
  'Layout Components',
]

export const CONTAINERS_TEMPLATES_PATH: string = `${__dirname}/../templates/container/`
export const CONTAINERS_TEMPLATES_FILES: string[] = fs.readdirSync(CONTAINERS_TEMPLATES_PATH)
export const CONTAINERS_DIR: string = 'containers/'
export const CONTAINERS_LIST_WITH_JUNK: string[] = fs.readdirSync(`${SRC_DIR}${CONTAINERS_DIR}`)
export const CONTAINERS_LIST: string[] = CONTAINERS_LIST_WITH_JUNK.filter(path => !(/(^|.\/)\.+[^/.]/g).test(path))
export const CONTAINERS_PATH: string = `${OUTPUT_DIR}/${CONTAINERS_DIR}`
