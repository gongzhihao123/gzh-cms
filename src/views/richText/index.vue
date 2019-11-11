<template>
  <div class="richText">
    <div id="wangeditor">
      <div ref="editorElem" style="text-align:left;"></div>
    </div>
    <div>{{editorContent}}</div>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
  name: 'richText',
  data () {
    return {
      editor: null,
      editorContent: ''
    }
  },
  // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
  mounted () {
    this.editor = new E(this.$refs.editorElem)
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.editorContent = html
      // 把这个html通过catchData的方法传入父组件
      this.catchData(this.editorContent)
    }
    this.editor.customConfig.menus = [
      // 菜单配置
      // 标题
      'head',
      // 粗体
      'bold',
      // 字号
      'fontSize',
      // 字体
      'fontName',
      // 斜体
      'italic',
      // 下划线
      'underline',
      // 删除线
      'strikeThrough',
      // 文字颜色
      'foreColor',
      // 背景颜色
      'backColor',
      // 插入链接
      'link',
      // 列表
      'list',
      // 对齐方式
      'justify',
      // 引用
      'quote',
      // 表情
      'emoticon',
      // 插入图片
      'image',
      // 表格
      'table',
      // 插入代码
      'code',
      // 撤销
      'undo',
      // 重复
      'redo'
    ]
    // 把这个html通过catchData的方法传入父组件
    this.editor.create()
  }
}
</script>
