<template>
  <div>
   <nav>
        <div class="nav-wrapper blue">
            <div class="container">
            <a href="#" data-target="slide-out" class="sidenav-trigger white-text"><i class="material-icons">menu</i></a>
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="index.html">My Diary</a></li>
                <li><a href="note.html">My Notes</a></li>
                <li><a href="#">My Task</a></li>
                <li><a href="#">My Galary</a></li>
                <li><a href="#"><button  data-target="modal1" class="btn-floating modal-trigger btn-small waves-effect waves-light blue darken-3 pulse"><i class="material-icons">create</i> </button> </a></li>
            </ul>
        </div>
     </div>
    </nav>


<ul id="slide-out" class="sidenav">
    <li>
        <div class="user-view">
            <div class="background">
                <img src="../images/unsplash.jpg" class="responsive-img">
            </div>
            <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
            <a href="#name"><span class="white-text name">Wisdom Ekpot</span></a>
            <a href="#email"><span class="white-text email">wisdomekpot@gmail.com</span></a>
        </div>
    </li>
    <li><a href="#"><button data-target="modal1" class="btn-floating modal-trigger btn-small waves-effect waves-light blue darken-3 pulse"><i class="material-icons">create</i> </button> </a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>My Diary</a></li>
    <li><a href="#!"><i class="material-icons">collections_bookmark</i>My Notes</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>My task</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>My Gallary</a></li>
</ul>   

<!-- modal -->
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4>Add New Diary</h4>
        <form  class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input id="text" type="text" v-model="newtitle">
                    <label for="email">Diary Header</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <Editor class="eedit" api-key="ihm8v1dhe8cub24l6pines3mfhry26jypvxaogkglu8pncpc" :init="{plugins: 'wordcount'}" v-model="newNote" ></Editor>
                    <!-- <textarea id="textarea1" v-model="newNote" class="materialize-textarea"></textarea>
                    <label for="textarea1">Diary Content</label> -->
                </div>
            </div>
            <div class="row">
                <div class="col s5 m5 l5">
                <a class="btn-floating btn-small waves-effect waves-light white"><i class="fas fa-angry black-text"></i></a>
                <a class="btn-floating btn-small waves-effect waves-light white"><i class="far fa-meh-blank black-text"></i></a>
                <a class="btn-floating btn-small waves-effect waves-light white"><i class="fas fa-flushed black-text"></i></a>
                <a class="btn-floating btn-small waves-effect waves-light white"><i class="fas fa-grin-squint-tears black-text"></i></a>
                <a class="btn-floating btn-small waves-effect waves-light white"><i class="fas fa-grimace black-text"></i></a>
                <a class="btn-floating btn-small waves-effect waves-light white"><i class="far fa-grin-beam black-text"></i></a>
                </div>
                <div class="col s7 m7 l7">
                    <div class="input-field col s12">
                        <input type="text" class="datepicker red-text" placeholder="Add a Date">
                    </div>
                </div>
            </div>
            <button type="submit" @click.prevent="saveNote" class="btn blue">Add</button>
        </form>
    </div>
</div>
<!-- modal closing -->


<!-- feature -->
<div class="fixed-action-btn">
    <a id="menu" class="waves-effect waves-light btn btn-floating"><i class="material-icons">apps</i></a>
    <ul>
        <li>
            <a  data-target="modal1" class="modal-trigger btn-floating btn-small waves-effect waves-light black"><i class="fas fa-plus blue-text darken-2"></i></a>
        </li>
        <li>
            <a class="btn-floating btn-small waves-effect waves-light black"><i class="fas fa-book blue-text darken-2"></i></a>
        </li>
        <li>
            <a class="btn-floating btn-small waves-effect waves-light black"><i class="fas fa-home blue-text darken-2"></i></a>
        </li>
    </ul>
</div>

  </div>
</template>

<script>
import { mapActions , mapGetters} from 'vuex'
import Editor from '@tinymce/tinymce-vue';
import tinymce from "tinymce";

export default {
  name: "appnav",
  data() {
      return {
          newtitle:'',
          newNote:'',       
}
},
  components: {
    Editor
  },
methods: {
    saveNote() {
        this.$store.dispatch('addNote', {
            id:this.lastid+1,
            title:this.newtitle,
            note:this.newNote
        }),
        this.newtitle='',
        this.newNote=''

    }
},
computed: {
    ...mapGetters(['notes']),
    ...mapActions([
        'addNote'
    ]),
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @media (min-width:768px) {
    .modal {
    width:60% !important;
}
}
@media (max-width:768px) {
    .modal {
    width:auto !important;
}
}

</style>
