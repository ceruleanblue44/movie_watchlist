<script setup
		lang="ts">
		import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import WatchlistPage from './WatchlistPage.vue'
import MovieGrid from './MovieGrid.vue'
import { MovieSummary } from '@/types/omdb'

const movies = ref<MovieSummary[]>([])

const updateMovies = (newMovies: MovieSummary[]) => {
	movies.value = newMovies
}

</script>

<template>
	<div class="bg-neutral-900 min-h-screen text-white font-sans">

		<SearchBar @update:movies="updateMovies" />


		<!-- <WatchlistPage /> -->
		<MovieGrid :movies="movies"/>

	</div>
</template>