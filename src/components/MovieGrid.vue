<script setup
		lang="ts">
		import MovieCard from './MovieCard.vue'
</script>

<template>

	<!-- Movie Grid -->
	<main class="movie-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 py-4">


		<!-- Repeat movie cards... -->
		<MovieCard />

	</main>
</template>