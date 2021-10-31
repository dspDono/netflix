<template>
  <nav class="flex flex-start bg-transparent p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img alt="Vue logo" src="../assets/minion.png" class="object-contain h-15 w-20 mr-5">
    </div>
    <div class="lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
          <router-link to="/" class="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Accueil</router-link>
          <router-link to="/movies" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Liste des films</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>