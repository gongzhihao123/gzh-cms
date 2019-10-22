<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{this.msg}}
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    axios.get('/news/index')
      .then((res) => {
        this.msg = res
      })
  }
}
</script>
