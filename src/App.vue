<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import NavBar from "@/components/NavBar";
  export default {
    components: {
      NavBar
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bg-movie {
  margin-top: -128px;
  padding-top: 128px;
}
</style>
