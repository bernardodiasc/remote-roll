export const getIntro = async () => await fetch('/api/intro').then(res => res.json())
export const getMovies = async () => await fetch('/api/movies').then(res => res.json())
