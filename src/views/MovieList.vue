<template>
  <div class="w-full bg-gray-800 min-h-screen bg-movie">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="text-center pb-12">
        <MovieFilter v-for="genre in movieStore.genres"
                     :name="genre.name"
                     :id="genre.id"
                     :active="genre.active"
                     :key="genre.key"
                     @click="movieStore.setGenreMovie(genre.id, genre)"
        ></MovieFilter>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <MovieCard v-for="movie in movieStore.movies" :key="movie.key" :poster="movie.poster_path"/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import MovieCard from "@/components/MovieCard.vue";
import { useMovieStore } from "@/store/movie";
import MovieFilter from "@/components/MovieFilter.vue"

export default {
  components: {
    MovieCard,
    MovieFilter
  },
  name: "MovieList",
  setup() {
    const movieStore = useMovieStore();
    movieStore.setMovies();
    movieStore.setGenres();
    return { movieStore }
  },
}
</script>

<style scoped>

</style>