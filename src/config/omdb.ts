const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const OMDB_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}` 
export const OMDB_POSTER_URL = `http://img.omdbapi.com/?apikey=${API_KEY}`