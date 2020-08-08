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


  html, body ,.app{ margin:0; height:100%; }
</style>
