<template>
    <div  id="app">

<!--      <p v-text="$route.params.id"/>-->
      <div v-html="content">

<!--        {{$route.query.content}}-->
      </div>
    </div>
</template>

<script>
  import {  queryProductNet,loadHtml } from '../network/apis'


  import jquery from '../../public/Content/mobileTrace/js/jquery-2.1.4.js'
  import rem from '../../public/Content/newMobileTrace/js/rem.js'
  import swiper from '../../public/Content/newMobileTrace/js/swiper.min.js'
  import echarts from '../../public/Content/newMobileTrace/js/echarts.common.min.js'
  export default {
    name: 'ContentPreview',
    metaInfo: {
      title: '溯源信息',
      meta: [


        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' },
        { name: 'renderer', content: 'webkit' },
        { name: 'format-detection', content: 'telephone=no, email=no' },
        { name: 'google', content: 'notranslate' },
        { name: 'author', content: 'Administrator' },
        { name: 'apple-itunes-app', content: 'app-id=123131232132' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'MobileOptimized', content: '320' },
        { name: 'screen-orientation', content: 'portrait' },
        { name: 'x5-orientation', content: 'portrait' },
        { name: 'full-screen', content: 'yes' },
        { name: 'x5-fullscreen', content: 'true' },
        { name: 'browsermode', content: 'application' },
        { name: 'x5-page-mode', content: 'app' },
        { name: 'x5-page-mode', content: 'default' }


      ]
    },
    data(){
      return{
        // id: {
        //   type:String,
        //   default: ''
        // },
        content: {
          type:String,
          default: ''
        },
        // loading:  false ,
      }
    },

    mounted () {
      let _this = this

      this.content ="111";

      this.queryProduct(this.$route.params.id);
      // this.load('http://localhost:63343/vue-content-release/public/huangguatemplate.html?_ijt=a3gr7ta7ut5f6qogdkt5eddi83')


    },

    methods:{
      queryProduct(id){
        var _this = this;
        queryProductNet(id)
          .then(function (response) {
            //注意这里的this指向
            _this.content = response.content;
          }).catch(function (error) {
          console.log(error);
        });
      },
      // load (url) {
      //   if  (url && url.length > 0) {
      //     // 加载中
      //     this .loading =  true
      //     let param = {
      //       accept:  'text/html, text/plain'
      //     }
      //     loadHtml(url, param).then((response) => {
      //       this .loading =  false
      //       // 处理HTML显示
      //       this .content = response
      //     }). catch (() => {
      //       this .loading =  false
      //       this .content =  '加载失败'
      //     })
      //   }
      // }

    }
  }


</script>

<style scoped>

  @import url(../../public/Content/newMobileTrace/css/index.css);
  @import url(../../public/Content/newMobileTrace/css/reset-h5.css);
  @import url(../../public/Content/newMobileTrace/css/swiper.css);
  @import url(../../public/Content/newMobileTrace/font/iconfont.css);

</style>
