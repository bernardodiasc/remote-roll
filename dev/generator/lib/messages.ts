import chalk from 'chalk'
import figlet from 'figlet'

export const log = console.info

export function figletLog(message: string, color: 'green') {
  log(
    chalk[color](
      figlet.textSync(message, {
        horizontalLayout: 'full'
      })
    )
  )
}

export function successLog(message: unknown) {
  log(chalk.greenBright(message))
}

export function warningLog(message: unknown) {
  log(chalk.yellowBright(message))
}

export function errorLog(message: unknown) {
  log(chalk.redBright(message))
}

export function infoLog(message: unknown) {
  log(chalk.blueBright(message))
}
