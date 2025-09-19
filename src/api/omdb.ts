import { OMDB_BASE_URL, OMDB_POSTER_URL } from '@/config/omdb'
import type { MovieSummary, SearchResponse } from "@/types/omdb"

export async function searchMovies(title: string): Promise<SearchResponse> {
	const res = await fetch(`${OMDB_BASE_URL}&s=${encodeURIComponent(title)}`)
	if (!res.ok) throw new Error(`HTTP error ${res.status}`)
	console.log(res)
	return res.json()
}

export async function getMoviePoster(title: string) {
	const res = await fetch(`${OMDB_POSTER_URL}&s=${encodeURIComponent(title)}`)
	if (!res.ok) throw new Error(`HTTP error ${res.status}`)
	// console.log(res.json())
	return res.json()
}

export async function getMovieDetails(imdbID: string): Promise<MovieSummary> {
  const res = await fetch(`${OMDB_BASE_URL}&i=${imdbID}`);
  if (!res.ok) throw new Error(`HTTP error ${res.status}`);
  return res.json();
}
