<template>
      <el-container style="border: 1px solid #eee">
        <header/>
        <el-container>
          <side/>
          <main/>
        </el-container>
      </el-container>

</template>

<script>

import Header from './HomeHeader'
import Main from './HomeMain'
import Side from './HomeSider'

export default {
  name: 'Home',
  components: {
    Header,Side,Main
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>


<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 40px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
    padding: 10px;
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

  body > .el-container {
    /*margin-bottom: 40px;*/
    height: 100%;
  }
</style>
