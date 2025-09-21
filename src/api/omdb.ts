import { OMDB_BASE_URL, OMDB_POSTER_URL } from '@/config/omdb'
import type { SearchResponse, MovieDetails } from "@/types/omdb"

export async function searchMovies(title: string): Promise<SearchResponse> {
	const res = await fetch(`${OMDB_BASE_URL}&s=${encodeURIComponent(title)}`)
	if (!res.ok) throw new Error(`HTTP error ${res.status}`)
	console.log(res)
	return res.json()
}

export async function getMovieDetails(imdbID: string): Promise<MovieDetails> {
  const res = await fetch(`${OMDB_BASE_URL}&i=${imdbID}&plot=full`)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
	console.log(res)
  return res.json()
}
