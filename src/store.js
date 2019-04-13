import Vue from "vue";
import Vuex from "vuex";
// import VueSweetalert2 from 'vue-sweetalert2';

// Vue.use(VueSweetalert2);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   notes: [
     {
       id:1,
       title:'this is all about me',
       note:'the note i have goes here'
     }
   ] 
  },
  mutations: {
   ADD_NOTE:(state,payload) => {
     state.notes.push(payload)
   },
    DELETE_NOTE: (state, note) => {
      let noteIndex = state.notes.findIndex(n => n.id === note.id);

      //and delete it from the store
      state.notes.splice(noteIndex, 1);
    },
  },
  actions: {
    addNote:(state,payload) => {
      state.commit('ADD_NOTE',payload)
    },
    deleteNote: (state, note) => {
      state.commit('DELETE_NOTE', note)
    },
    },
  getters: {
    notes: (state) => {
      return state.notes
    }
    }
})
