<template>
  <div>
    <section>
        <div class="container">
            <div class="row">
                <h6>Recently Added</h6>
                <div class="col s12 m4 l4" v-for="(note,index) in notes" :key="index">
                    <div class="card z-depth-3" style="width:auto;">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator responsive-img image" src="../images/unsplash.jpg">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">{{note.title}}<i
                                    class="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">{{note.title}}<i class="material-icons right">close</i></span>
                            <p>{{note.body}}</p>
                        </div>
                    </div>
                    </div> 
            </div>
        </div>
        <!-- </div> -->
    </section>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: "notecard",
  computed:{
      ...mapState([
          'notes'
      ])
  }
};
</script>