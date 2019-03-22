import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newNote:{},
    notes: [{
      poster: 'static/assets/logo.png',
      id: 1,
      title: 'sunt aut facere repellat provident occaecati', 
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      poster: 'static/assets/logo.png',
      id: 1,
      title: 'sunt aut facere repellat provident occaecati',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
      {
        poster: 'static/assets/logo.png',
        id: 1,
        title: 'sunt aut facere repellat provident occaecati',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },  
  ],
  },
  mutations: {
    ADD_NOTE:(state,payload) => {
      state.notes.push(payload)
      // this.newNote={}
   },
  },
  actions: {
    addnote: (state, payload) => {
      state.commit('ADD_NOTE', payload)
    }
    }
})
