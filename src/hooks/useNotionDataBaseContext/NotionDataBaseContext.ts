import { createContext } from 'react'

import type { INotionDataBaseContextReturn } from './useNotionDataBaseContext.types'

const NotionDataBaseContext = createContext<INotionDataBaseContextReturn | null>(null)

export default NotionDataBaseContext
