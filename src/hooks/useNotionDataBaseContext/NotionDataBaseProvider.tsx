import { useQuery } from '@tanstack/react-query'

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
    queryFn: () => fetch('/api/movies').then(res => res.json()),
  })
  return (
    <NotionDataBaseContext.Provider value={{
      data: data?.data,
      isLoading,
    }}>
      {children}
    </NotionDataBaseContext.Provider>
  )
}

export default NotionDataBaseProvider
