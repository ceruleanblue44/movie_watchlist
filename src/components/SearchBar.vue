<script setup
		lang="ts">
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

import MovieDetailsPage from './MovieDetailsPage.vue'
import { searchMovies } from '@/api/omdb'
import { MovieSummary } from '@/types/omdb'


const emit = defineEmits<{ (e: 'update:movies', movies: MovieSummary[]): void }>()

const searchQuery = defineModel<string>()

const searchMoviesData = async () => {
	if (!searchQuery.value) return

	try {
		const data = await searchMovies(searchQuery.value)
		console.log(data.Search);
		emit('update:movies', data.Search)
		return data.Search
	} catch(err) {
		console.error(err);
	}
}





</script>
<template>
	<!-- Search Bar (Search Page only) -->
	<section class="search w-full  px-4 py-5">
		<div class="search__bar flex items-center bg-neutral-800 rounded-lg px-3 py-2 max-w-md mx-auto md:mx-0">

			<input type="text"
				   id="movie-search"
				   placeholder="Search movies..."
				   class="search__input flex-1 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-neutral-800 text-sm md:text-base"
				   v-model='searchQuery'>
			<label for="movie-search"
				   @click="searchMoviesData">
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
	
	<!-- <MovieDetailsPage /> -->
	 
</template>