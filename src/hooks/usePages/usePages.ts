import { useQuery } from '@tanstack/react-query'

import { getIntro } from '@services/api'

import type { IUsePages } from './usePages.types'

const usePages: IUsePages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['intro'],
    queryFn: () => getIntro(),
  })

  return { data, isLoading }
}

export default usePages
