<template>
  <div id="app">
     <Nav/>
     <!--需要缓存的路由视图走这里 -->
     <keep-alive>
       <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"/>
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

  bottom: 60px;
  top: 0;
  overflow-y: auto
}



</style>
