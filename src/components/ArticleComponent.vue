<template>
  <div class="article-container">
    <article class="article" v-for="post in posts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </article>
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

.article-container {
  display: grid;
  grid-template-columns: 50% 50%;
  .article {
  max-width: 400px;
  margin: 0 auto 15px;

  h2 {
    font-size: 24px;
  }
}
}
</style>

<script>
export default {
  name: "ArticleComponent",
  data() {
    return {
      KEY_API: "https://jsonplaceholder.typicode.com/posts?_limit=5",
      posts: []
    };
  },
  async mounted() {
    fetch;
    fetch(this.KEY_API)
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response);
      })
      .then(response => response.json())
      .then(response => {
        this.posts = response;
        console.log(response);

        console.log(this.posts);
      });
  }
};
</script>