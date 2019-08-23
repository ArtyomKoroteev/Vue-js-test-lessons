<template>
  <div id="app">
    <ArticleComponent></ArticleComponent>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
// @ is an alias to /src
import ArticleComponent from '@/components/ArticleComponent.vue';

export default {
  name: 'app',
  components: {
   ArticleComponent,
  },
};
</script>
