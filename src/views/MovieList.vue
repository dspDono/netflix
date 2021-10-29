<template>
  <MovieCard v-for="movie in movies" :key="movie" :param="movie"/>
</template>

<script>
import {getMovies} from "../services/movieService";
import MovieCard from "../components/MovieCard";

export default {
  components: {
    MovieCard
  },
  name: "MovieList",
  data() {
    return {
      movies: []
    }
  },
  created() {
    getMovies().then((res) => {
      this.movies = res[0].borders;
    })
  }
}
</script>

<style scoped>

</style>