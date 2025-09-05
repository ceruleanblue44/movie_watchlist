<script setup
		lang="ts">
import MovieGrid from './MovieGrid.vue'

</script>

<template> <!-- Toggle (Watchlist Page only) -->
<MovieGrid />
	<section class="toggle px-4 py-2">
		<div class="toggle__wrapper flex gap-2 max-w-md mx-auto md:mx-0">
			<button class="toggle__btn flex-1 bg-red-600 text-white py-2 rounded-lg text-sm md:text-base">To
				Watch</button>
			<button
					class="toggle__btn flex-1 bg-neutral-700 text-gray-300 py-2 rounded-lg text-sm md:text-base">Watched</button>
		</div>
	</section>
</template>