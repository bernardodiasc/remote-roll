import { useQuery } from '@tanstack/react-query'
// import { useMemo } from 'react'

import type { IUseMovies } from './useMovies.types'

const useMovies: IUseMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetch('/api/movies').then(res => res.json()),
  })

  // translate notion data to something usable

  return { data, isLoading }
}

export default useMovies
