<template>
  <div class="login">
    <el-carousel>
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="login-main">
      <el-tabs type="border-card">
        <el-tab-pane label="登录">
          <el-input
            placeholder="请输入内容"
            v-model="login_user">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-input
            placeholder="请输入内容"
            v-model="login_passWord">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button>登录</el-button>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        { imgUrl: require('../../assets/img/1.png') },
        { imgUrl: require('../../assets/img/2.jpg') },
        { imgUrl: require('../../assets/img/3.jpg') },
        { imgUrl: require('../../assets/img/4.jpg') }
      ],
      login_user: '',
      login_password: ''
    }
  }
}
</script>
<style lang="scss">
.login {
  .login-main {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    min-height: 300px;
    transform: translate(-50%, -50%);
    background: rgba($color: #413f3f, $alpha: 0.7);
    .el-tabs {
      .el-tabs__header {
        .el-tabs__nav-scroll {
          .el-tabs__item {
            width: 200px;
            text-align: center;
          }
        }
      }
      .el-tabs__content {
        background-color:transparent;
        .el-tab-pane {
          padding: 0 40px;
          .el-input {
            margin-top: 20px;
          }
        }
      }
    }
  }
  .el-carousel {
    .el-carousel__container {
      position: fixed;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
</style>
