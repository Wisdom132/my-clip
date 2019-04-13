<template>
  <div>
     <div class="fixed-action-btn">
                                <a class="waves-effect waves-light btn btn-floating"><i class="material-icons">apps</i></a>
                                <ul>
                                    <li>
                                        <a class="btn-floating btn-small waves-effect waves-light white"  @click="removeNote(note)"><i class="material-icons  red-text" title="remove">delete</i></a>
                                    </li>
                                    <li>
                                        <a class="btn-floating btn-small waves-effect waves-light"><i class="fas fa-edit" title="edit"></i></a>
                                    </li>
                                </ul>
                            </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "edit",
  props:['note'],

  methods: {
      removeNote(Note) {
        swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this note!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {

  if (willDelete) {
    this.$store.dispatch('deleteNote',Note)
    swal("Poof! Your note has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your note is safe!");
  }
});        
      }
  },
  computed: {
      ...mapActions(['deleteNote']),
  } 
};
</script>
 <style scoped>

</style>

