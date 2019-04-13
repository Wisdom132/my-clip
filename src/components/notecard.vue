<template>
  <div>
    <section>
        <div class="container">
            <div class="row">
                <h6>Recently Added</h6>
                 <!-- <ul class="collapsible popout" v-for="(note,index) in notes" :key="index">
                        <li>
                        <div class="collapsible-header"><edit :note="note" /> {{note.title}}</div>
                        <div class="collapsible-body"><span>{{note.note}}</span></div>
                        </li>
                        
                </ul> -->
                <div class="col s12 m5 l5" v-for="(note,index) in notes" :key="index">
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
                            <p>{{note.note}}</p>
                        <edit :note="note" />
                        </div>
                    </div>
                    </div>
                     
            </div>
        </div>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import edit from '@/components/edit'
export default {
  name: "notecard",
  computed: {
      ...mapState([
          'notes'
      ])
  },
  components: {
      edit,

  },
  updated() {
           var elems = document.querySelectorAll('.fixed-action-btn');
             var instances = M.FloatingActionButton.init(elems); 
  }
  
};
</script>
 <style scoped>
.del {
    background:transparent !important;

}
.con {
    color:black !important;
}
</style>

