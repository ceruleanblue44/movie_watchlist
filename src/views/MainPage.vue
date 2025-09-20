<script setup
		lang="ts">
		import { ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
// import WatchlistPage from './WatchlistPage.vue'
import NavBar from '@/components/NavBar.vue'
import MovieGrid from '@/components/MovieGrid.vue'
import { MovieSummary } from '@/types/omdb'

const movies = ref<MovieSummary[]>([])

</script>

<template>
			<NavBar />

	<div class="bg-neutral-900 min-h-screen text-white font-sans">

		<SearchBar @update:movies="movies = $event" />


		<!-- <WatchlistPage /> -->
		<MovieGrid :movies="movies"/>

	</div>
</template>