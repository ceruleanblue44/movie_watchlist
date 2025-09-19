<script setup
		lang="ts">
		import MovieCard from './MovieCard.vue'
		import { MovieSummary } from '@/types/omdb';
		const props = defineProps<{ movies: MovieSummary[] }>()
</script>

<template>

	<!-- Movie Grid -->
	<main class="movie-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 py-4">


		<!-- Repeat movie cards... -->
		<MovieCard v-for="movie in props.movies" :key="movie.imdbID" :movie="movie" />

	</main>
</template>