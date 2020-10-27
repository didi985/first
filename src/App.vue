<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
  export default {
      data() {
         return {

         };
      },

      created() {

      },
      mounted() {

      },
      methods: {

      }
   };
</script>
<style lang="scss">
  html,body{
    height: 100%;
    font-size: 0.13rem;
  }

 #app {
  background-color: #f0f2f5;
}
/*
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
