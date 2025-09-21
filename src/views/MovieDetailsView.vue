<script setup
		lang="ts">
		import { onMounted, ref } from 'vue'
		import { useRoute } from 'vue-router'
		import { getMovieDetails } from '@/api/omdb'
		import { MovieDetails } from '@/types/omdb'

		const route = useRoute()
		const movie = ref<MovieDetails | null>(null)

		onMounted(async () => {
			const id = route.params.imdbID as string
			try {
				movie.value = await getMovieDetails(id)
				console.log(movie.value)
			} catch(err) {
				console.error(err);
			}
		})
</script>

<template>
	<!-- Movie Details Page Example -->
	<div class="bg-neutral-900 min-h-screen text-white font-sans">
		<section class="movie-details px-4 py-6 hidden lg:flex lg:gap-6">
			<!-- Poster left -->
			<img :src='`${movie?.Poster}`'
				 alt="Large Poster"
				 class="movie-details__poster w-full lg:w-1/3 rounded-xl mb-4 lg:mb-0">

			<!-- Info right -->
			<div class="movie-details__content flex-1">
				<h2 class="movie-details__title text-xl md:text-2xl font-bold mb-1">{{ movie?.Title }}</h2>
				<p class="movie-details__rating text-yellow-400 text-sm md:text-base mb-2">IMDb rating:
					{{ movie?.imdbRating }}</p>
				<p class="movie-details__rating text-gray-400 text-sm md:text-base mb-2">Year: {{ movie?.Year }}</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Genre: {{ movie?.Genre }}</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Actors: {{ movie?.Actors }}</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Director: {{ movie?.Director }}
				</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Writer: {{ movie?.Writer }}</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Language: {{ movie?.Language }}
				</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Country: {{ movie?.Country }}</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Type: {{ movie?.Type }}</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-1">Runtime: {{ movie?.Runtime }}</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-4">Release date:
					{{ movie?.Released }}</p>
				<p class="movie-details__meta text-gray-400 text-sm md:text-base mb-4">Awards: {{ movie?.Awards }}</p>
				<p class="movie-details__overview text-gray-300 text-sm md:text-base mb-4">
					{{ movie?.Plot }}
				</p>
				<button
						class="movie-details__btn w-full lg:w-auto bg-red-600 hover:bg-red-700 py-3 px-6 rounded-lg text-sm md:text-base font-medium">
					Add ➕
				</button>
			</div>
		</section>
	</div>
</template>