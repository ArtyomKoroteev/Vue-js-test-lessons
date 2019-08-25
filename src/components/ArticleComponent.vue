<template>
  <div class="article-section">
    <h2 class="title">Articles</h2>
    <div class="article-container">
      <article class="article" v-for="post in posts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </article>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  font-size: 36px;
  font-weight: bold;
}

.article-section {
  padding: 0 30px;
}

.article-container {
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  .article {
    // max-width: 400px;
    margin: 0 auto 15px;
    border: 1px solid black;
    padding: 10px;

    h2 {
      font-size: 24px;
      width: 100%;
      flex-grow: 1;
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
      });
  }
};
</script>