<script setup
		lang="ts">
</script>

<template>
	<!-- Movie Card -->
	<article class="movie-card bg-neutral-800 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition">
		<img src="https://via.placeholder.com/360x540"
			 alt="Movie Poster"
			 class="movie-card__poster w-full">
		<div class="movie-card__info p-3">
			<h2 class="movie-card__title text-base md:text-lg font-semibold">Movie Title</h2>
			<p class="movie-card__year text-gray-400 text-sm md:text-base mb-2">2024</p>
			<button
					class="movie-card__btn w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm md:text-base font-medium">
				Add ➕
			</button>
		</div>
	</article>

</template>