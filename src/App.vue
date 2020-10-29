<template>
  <div id="app">
    <router-view/>
    <frame />
  </div>
</template>
<script>
import frame from './components/Frame'
  export default {
    components:{frame},
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


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
