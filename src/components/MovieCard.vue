<template>
  <div class="w-full rounded-lg shadow-lg overflow-hidden flex flex-col">
    <div class="w-full h-80">
      <img class="object-center object-cover w-full h-full" :src="'https://image.tmdb.org/t/p/original/' + poster">
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ['poster']
}
</script>

<style scoped>

</style>