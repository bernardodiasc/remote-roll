import { useQuery } from '@tanstack/react-query'

import { getMovies } from '@services/api'

import type { IUseMovies } from './useMovies.types'

const useMovies: IUseMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: () => getMovies(),
  })

  return { data, isLoading }
}

export default useMovies
