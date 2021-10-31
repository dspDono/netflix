<template>
  <div class="w-full min-h-screen bg-movie" :style="{'backgroundImage': 'url('+ movieStore.getImageMovie +')'}">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="text-center pb-12">
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">Films populaires</h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MovieCard v-for="movie in movieStore.movies" :key="movie.key" :poster="movie.poster_path"/>
      </div>
    </section>
    <div class="home">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MovieCard from "@/components/MovieCard.vue";
import { useMovieStore } from "@/store/movie";

export default defineComponent({
  name: 'Home',
  components: {
    MovieCard
  },
  setup() {
    const movieStore = useMovieStore();
    movieStore.setPopularMovies();
    return { movieStore }
  }
});
</script>
