<template>
  <div class="menu">
    <el-menu
      default-active="$router.path"
      class="el-menu-vertical-demo"
      router>
      <template v-for="(item, ind) in $router.options.routes">
        <el-submenu :key="ind" :index='String(item.path)' v-if='item.meta.isNav && item.children && item.children.length > 0 '>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <menu-tree :menuData='item.children'></menu-tree>
        </el-submenu>
        <el-menu-item :index="String(item.path)" :key="ind" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menuTree from './menu-tree.vue'
export default {
  name: 'menu',
  components: {
    menuTree
  },
  mounted () {
    console.log('router', this.$router.options.routes)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu {}
</style>
