import type { TypeIsSSR } from './helpers.types'

export const isSSR: TypeIsSSR = typeof window === 'undefined'
