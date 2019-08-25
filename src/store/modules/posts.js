/* eslint-disable */
export default {
  //определяем начальные данные
  state: {
    posts: [],
  },
  //содержит футнкции, которые на прямую изменяют стор
  mutations: {},
  actions: {},
  //позволяет изменять и получать данные
  getters: {
    allPosts(state) {
      console.log(state.posts);
    },
  },
}
