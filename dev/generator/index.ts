import { Command } from 'commander'

import {
  createComponent,
  createContainer,
  createHook,
  createPage
} from './generators'
import { figletLog } from './lib/messages'

const program = new Command()

figletLog('XE Dev Tool', 'green')
figletLog('File Generator', 'green')

program
  .command('component <name>')
  .description('Generate a UI component')
  .action((name: string) => createComponent(name))

program
  .command('container <name>')
  .description('Generate a Container component')
  .action((name: string) => createContainer(name))

program
  .command('hook <name>')
  .description('Generate a Hook')
  .action((name: string) => createHook(name))

program
  .command('page <name>')
  .description('Generate a Gatsby Page')
  .action((name: string) => createPage(name))

program.parse(process.argv)
