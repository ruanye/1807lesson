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
html,body{
  height: 100%;
}
a{
  text-decoration: none;
  color: #666
}
.container{
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 60px;
  overflow-y: auto
}



</style>
