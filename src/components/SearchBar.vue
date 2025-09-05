<script setup
		lang="ts">
import MovieDetailsPage from './MovieDetailsPage.vue'

interface Movie {
  id: string
  title: string
  year: string
  poster: string
  overview?: string
}


async function searchMovies(query: string): Promise<Movie[]> {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=YOUR_KEY&s=${encodeURIComponent(query)}`
  )
  const data = await res.json()

//   console.log(object);

  return (data.Search || []).map((m: any) => ({
    id: m.imdbID,
    title: m.Title,
    year: m.Year,
    poster: m.Poster !== "N/A" ? m.Poster : "",
  }))
}

</script>
<template>
	<!-- Search Bar (Search Page only) -->
	<section class="search w-full  px-4 py-5">
		<div class="search__bar flex items-center bg-neutral-800 rounded-lg px-3 py-2 max-w-md mx-auto md:mx-0">
			<input type="text"
				   id="movie-search"
				   placeholder="Search movies..."
				   class="search__input flex-1 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none text-sm md:text-base">
			<label for="movie-search" @click="searchMovies">
				<svg class="search__icon w-5 h-5 text-gray-400"
					 fill="none"
					 stroke="currentColor"
					 viewBox="0 0 24 24">
					<path stroke-linecap="round"
						  stroke-linejoin="round"
						  stroke-width="2"
						  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
				</svg> </label>
		</div>
	</section>
	<MovieDetailsPage />
</template>