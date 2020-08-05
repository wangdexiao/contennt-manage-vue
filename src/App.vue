<template>

  <router-view/>

</template>

<script>
  import Home from './views/Home'
  export default {
    components: { Home },
    data(){

      return {

      }
    },

    created () {
      // this.$router.replace('/')
    },
    // methods :{

      //添加内容成功,路由到管理界面
      // contentAddSuccessed(){
      //   // this.$router.replace('/content-manage')
      // },
      //路由到预览内容界面
      // contentPreview(content){
      //   this.$router.replace({
      //     path : "/content-preview" ,
      //     query : {'content':content}
      //   })
      // },
      //路由到添加内容页面
      // routeAddContent(){
      //   this.$router.replace('content-add')
      // },




    // }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 40px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
    padding: 10px;
  }

  body > .el-container {
    /*margin-bottom: 40px;*/
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }




  html, body ,.app{ margin:0; height:100%; }
</style>
