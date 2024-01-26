import { useQuery } from '@tanstack/react-query'

import { getNotionDataBase } from '@services/notion'

import NotionDataBaseContext from './NotionDataBaseContext'

import type { FunctionComponent, PropsWithChildren } from 'react'

const NotionDataBaseProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ['notion'],
    queryFn: () => getNotionDataBase(),
  })
  return (
    <NotionDataBaseContext.Provider value={{
      data,
      isLoading,
    }}>
      {children}
    </NotionDataBaseContext.Provider>
  )
}

export default NotionDataBaseProvider
