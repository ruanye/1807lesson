<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
export default {
  components:{
    Nav
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: #666
}



</style>
