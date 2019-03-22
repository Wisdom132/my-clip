<template>
  <div>
    <section id="diary_header">
        <div class="row">
            <div class="col s12">
                <h2 class="center-align white-text header_text">{{head}}</h2>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
export default {
    data() {
    return {
        head:'My Diary'
     } 
    },
  name:'App',
  components: {
 
  }
}
</script>
<style>
#diary_header {
    background-image:linear-gradient(rgba(6, 6, 195, 0.55), rgba(0, 0, 34, 0.55)),url('../images/header.png');
    background-size: contain;
    height:400px;
    background-position: center center;
}
</style>