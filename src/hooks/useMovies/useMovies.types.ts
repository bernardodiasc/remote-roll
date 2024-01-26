interface IUseMoviesReturn {
  data: unknown
  isLoading: boolean
}

export interface IUseMovies {
  (): IUseMoviesReturn
}
