<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
   <!-- Navbar -->
  <header class="navbar flex items-center justify-between bg-neutral-800 px-4 py-3">
    <h1 class="navbar__logo text-lg md:text-xl font-bold">🎬 Movie Watchlist</h1>
    <nav class="navbar__links hidden sm:block">
      <ul class="flex gap-6 text-sm md:text-base">
        <li><a href="#" class="hover:text-red-500">Search</a></li>
        <li><a href="#" class="hover:text-red-500">Watchlist</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
