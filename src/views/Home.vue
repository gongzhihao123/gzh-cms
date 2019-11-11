<template>
  <div class="home">
    <Menu></Menu>
    <div class="main">
      <topShow></topShow>
      <div class="routerNaviga">路由导航</div>
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Menu from './../components/common/menu.vue'
import topShow from './../components/common/topShow.vue'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Menu,
    topShow
  },
  created () {
    axios.get('/news/index')
      .then((res) => {
        this.msg = res
      })
  }
}
</script>
<style lang="scss" scoped>
  .home {
    .menu {
      float: left;
      width: 200px;
    }
    .main {
      margin-left: 200px;
      overflow: auto;
      border-left: 1px solid #ccc;
      height: 100vh;
      .routerNaviga {
        height: 60px;
        background: #666;
      }
    }
  }
</style>
