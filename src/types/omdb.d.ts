export interface MovieSummary {
	Title: string;
	Year: string;
	Type: string;
	imdbID: string;
	Poster: string;
}

export interface SearchResponse {
	Search: MovieSummary[];
	Response: 'True' | 'False';
	totalResults: string;
	Error?: string;
}

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Array<{ Source: string; Value: string }>
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
