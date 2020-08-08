<template>
    <el-container style="border: 1px solid #eee">
      <home-sider/>

      <el-main>
        <home-header/>
        <home-main/>
      </el-main>
    </el-container>


</template>

<script>

import HomeHeader from './HomeHeader'
import HomeMain from './HomeMain'
import HomeSider from './HomeSider'

export default {
  name: 'Home',
  components: {
    HomeMain,
    HomeSider,
    HomeHeader,
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>


<style >
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
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

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .router-link-active > .is-active{
    background-color: #B3C0D1;
  }

  html, body ,.app{ margin:0; height:100%; }
</style>
