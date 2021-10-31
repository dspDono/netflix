<template>
  <button class="bg-transparent hover:bg-white text-white hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded mr-5 mb-5">
    {{ name }}
  </button>
</template>

<script lang="ts">

export default {
  name: "MovieFilter",
  props: ['name', 'id'],
}
</script>

<style scoped>
  .active {
    @apply bg-white text-gray-800 border-white ;
  }
</style>