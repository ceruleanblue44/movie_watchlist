<script setup
		lang="ts">
</script>

<template>
	<!-- Movie Details Page Example -->
	<section class="movie-details px-4 py-6 hidden lg:flex lg:gap-6">
		<!-- Poster left -->
		<img src="https://via.placeholder.com/400x600"
			 alt="Large Poster"
			 class="movie-details__poster w-full lg:w-1/3 rounded-xl mb-4 lg:mb-0">

		<!-- Info right -->
		<div class="movie-details__content flex-1">
			<h2 class="movie-details__title text-xl md:text-2xl font-bold mb-1">Movie Title (2024)</h2>
			<p class="movie-details__rating text-yellow-400 text-sm md:text-base mb-2">⭐⭐⭐⭐✩</p>
			<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Genres: Action, Drama</p>
			<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Runtime: 125 min</p>
			<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-4">Release: 2024</p>
			<p class="movie-details__overview text-gray-300 text-sm md:text-base mb-4">
				Description text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<button
					class="movie-details__btn w-full lg:w-auto bg-red-600 hover:bg-red-700 py-3 px-6 rounded-lg text-sm md:text-base font-medium">
				Add ➕
			</button>
		</div>
	</section>
</template>