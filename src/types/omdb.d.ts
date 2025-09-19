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

// interface Movie {
//   id: string
//   title: string
//   year: string
//   poster: string
//   overview?: string
// }