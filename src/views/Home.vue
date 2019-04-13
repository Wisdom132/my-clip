<template>
<div>
    <noteheader></noteheader>
  <notecard></notecard>
</div>

</template>

<script>
// @ is an alias to /src
import notecard from '@/components/notecard'
import noteheader from '@/components/noteheader'
import {mapGetters} from 'vuex'

export default {
  name: "home",
  components: {
    notecard,
    noteheader
  },
  computed:{
    ...mapGetters([
      'notes'
    ]),
  }
};
</script>
