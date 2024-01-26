import { useQuery } from '@tanstack/react-query'
// import { useMemo } from 'react'

import type { IUsePages } from './usePages.types'

const usePages: IUsePages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['intro'],
    queryFn: () => fetch('/api/intro').then(res => res.json()),
  })

  // translate notion data to something usable

  return { data, isLoading }
}

export default usePages
