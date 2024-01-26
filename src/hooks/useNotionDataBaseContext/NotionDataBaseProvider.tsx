import { useMovies } from '@hooks/useMovies'
import { usePages } from '@hooks/usePages'

import NotionDataBaseContext from './NotionDataBaseContext'

import type { FunctionComponent, PropsWithChildren } from 'react'

const NotionDataBaseProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const {
    data: pages,
    isLoading: pagesIsLoading,
  } = usePages()
  const {
    data: movies,
    isLoading: moviesIsLoading,
  } = useMovies()
  return (
    <NotionDataBaseContext.Provider value={{
      pages,
      pagesIsLoading,
      movies,
      moviesIsLoading,
    }}>
      {children}
    </NotionDataBaseContext.Provider>
  )
}

export default NotionDataBaseProvider
