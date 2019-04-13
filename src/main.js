import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'materialize-css/dist/css/materialize.css'
import VueSweetalert2 from 'vue-sweetalert2';
import swal from 'sweetalert';
import tinymce from "tinymce";
// import Editor from '@tinymce/tinymce-vue';


// commonjs require
// NOTE: default needed after require
// let editor = require('@tinymce/tinymce-vue').default;



Vue.use(VueSweetalert2 , swal , tinymce);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
