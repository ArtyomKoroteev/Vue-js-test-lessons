/* eslint-disable */
export default {
  //определяем начальные данные
  state: {
    posts: [],
  },
  //содержит футнкции, которые на прямую изменяют стор
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },

  actions: {
    fetchPosts(context, limit = 5){
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response);
      })
      .then(response => response.json())
      .then(response => {
        context.commit('updatePosts', response);
      });
    }
  },
  //позволяет изменять и получать данные, более правильно обрабатывать инфу от сюда, а не из стейтов
  getters: {
    allPosts(state) {
      return state.posts;
    },
    postsQuantity(state) {
      return state.posts.length;
    }
  },
}
