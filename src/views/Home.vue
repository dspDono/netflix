<template>
  <div class="home">
    <h1>hello</h1>
    <MovieCard v-for="movie in popularMovies" :param="movie.original_title" :key="movie.key"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getPopularMovies } from "@/services/movieService";
import MovieCard from "../components/MovieCard.vue";

export default defineComponent({
  name: 'Home',
  components: {
    MovieCard
  },
  data(){
    return {
      popularMovies: []
    }
  },
  created() {
    getPopularMovies().then((res) => {
       this.popularMovies = res.results
    })
  }
});
</script>
