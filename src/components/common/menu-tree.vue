<template>
  <div class="menu-tree">
    <template v-for="(cld, i) in menuData" >
      <el-menu-item-group v-if="cld.meta.isHidden" :key="i">
        <el-menu-item :index="String(cld.path)">{{cld.meta.title}}</el-menu-item>
      </el-menu-item-group>
      <template v-if="!cld.meta.isHidden">
        <el-submenu v-for="(clds, is) in cld.children" :key="is" >
          <template slot="title">{{cld.meta.title}}</template>
          <el-menu-item :index="String(clds.path)">{{clds.meta.title}}</el-menu-item>
        </el-submenu>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'menu-tree',
  data () {
    return {}
  },
  props: ['menuData']
}
</script>
