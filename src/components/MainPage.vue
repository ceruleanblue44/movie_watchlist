<script setup lang="ts"></script> 
 
 <template>
	<div class="bg-neutral-900 text-white font-sans">
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

    <!-- Search Bar (Search Page only) -->
  <section class="search px-4 py-3">
    <div class="search__bar flex items-center bg-neutral-800 rounded-lg px-3 py-2 max-w-md mx-auto md:mx-0">
      <input type="text" placeholder="Search movies..." 
             class="search__input flex-1 bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none text-sm md:text-base">
      <svg class="search__icon w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"/>
      </svg>
    </div>
  </section>

  <!-- Toggle (Watchlist Page only) -->
  <section class="toggle px-4 py-2 hidden">
    <div class="toggle__wrapper flex gap-2 max-w-md mx-auto md:mx-0">
      <button class="toggle__btn flex-1 bg-red-600 text-white py-2 rounded-lg text-sm md:text-base">To Watch</button>
      <button class="toggle__btn flex-1 bg-neutral-700 text-gray-300 py-2 rounded-lg text-sm md:text-base">Watched</button>
    </div>
  </section>

  
  <!-- Movie Grid -->
  <main class="movie-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 py-4">
    
    <!-- Movie Card -->
    <article class="movie-card bg-neutral-800 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition">
      <img src="https://via.placeholder.com/360x540" alt="Movie Poster" class="movie-card__poster w-full">
      <div class="movie-card__info p-3">
        <h2 class="movie-card__title text-base md:text-lg font-semibold">Movie Title</h2>
        <p class="movie-card__year text-gray-400 text-sm md:text-base mb-2">2024</p>
        <button class="movie-card__btn w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm md:text-base font-medium">
          Add ➕
        </button>
      </div>
    </article>

    <!-- Repeat movie cards... -->
    
  </main>

  <!-- Movie Details Page Example -->
  <section class="movie-details px-4 py-6 hidden lg:flex lg:gap-6">
    <!-- Poster left -->
    <img src="https://via.placeholder.com/400x600" alt="Large Poster" class="movie-details__poster w-full lg:w-1/3 rounded-xl mb-4 lg:mb-0">
    
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
      <button class="movie-details__btn w-full lg:w-auto bg-red-600 hover:bg-red-700 py-3 px-6 rounded-lg text-sm md:text-base font-medium">
        Add ➕
      </button>
    </div>
  </section>
	</div>
  </template>