<script setup
		lang="ts">
import { MovieSummary } from '@/types/omdb'

		const props = defineProps<{movie: MovieSummary}>()
</script>

<template>
	<RouterLink :to="{ name: 'movieDetails', params: { imdbID: props.movie.imdbID } }">
		<!-- Movie Card -->
		<article
				 class="movie-card flex flex-col justify-between bg-neutral-800 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition">
			<img :src='`${props.movie.Poster}`'
				 alt="Movie Poster"
				 class="movie-card__poster w-full">
			<div class="movie-card__info p-3">
				<h2 class="movie-card__title text-base md:text-lg font-semibold">{{ props.movie.Title }}</h2>
				<p class="movie-card__year text-gray-400 text-sm md:text-base mb-2">{{ props.movie.Year }}</p>
				<button
						class="movie-card__btn w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm md:text-base font-bold">
					Add
				</button>
			</div>
		</article>
	</RouterLink>
</template>