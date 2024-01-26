import type { IGetIntro, IGetIntroReturn, IGetMovies, IGetMoviesReturn } from './api.types'

export const getIntro: IGetIntro = async () =>
  await fetch('/api/intro').then(res => res.json()) as IGetIntroReturn

export const getMovies: IGetMovies = async () =>
  await fetch('/api/movies').then(res => res.json()) as IGetMoviesReturn
