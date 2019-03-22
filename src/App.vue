<template>
  <div id="app">
    <appnav></appnav>
        <router-view></router-view>
  </div>
</template>
<script>
import appnav from '@/components/appnav'
export default {
  name:'App',
  components: {
   appnav,
  }
}
</script>
<style>
body {
    font-family: 'ZCOOL XiaoWei', serif !important;
}
</style>
