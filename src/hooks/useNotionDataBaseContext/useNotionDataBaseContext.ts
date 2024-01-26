import { useContext } from 'react'

import NotionDataBaseContext from './NotionDataBaseContext'

import type { INotionDataBaseContextReturn } from './useNotionDataBaseContext.types'

const useNotionDataBaseContext = () =>
  useContext<INotionDataBaseContextReturn | null>(NotionDataBaseContext)

export default useNotionDataBaseContext
