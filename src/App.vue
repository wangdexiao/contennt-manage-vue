<template>
  <el-container style="border: 1px solid #eee">
    <!--头部-->
    <el-header  style="text-align: right; font-size: 12px" >
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <!--主体+ 侧边栏-->
    <el-container >
      <!--侧边栏-->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

        <el-menu style=";height: 100%" :default-openeds="['1'/*, '3'*/]">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>内容管理</template>
              <router-link to="/rich-text"  ><el-menu-item index="1-1">富文本</el-menu-item></router-link>
              <router-link to="/content-manage"> <el-menu-item index="1-2">内容管理</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>账号管理</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>权限管理</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--主体-->
      <el-main >
        <router-view @routeAddContent="routeAddContent" @contentPreview="contentPreview" @addSuccessed="contentAddSuccessed"/>
      </el-main>
    </el-container>

    <!--底部-->
<!--    <el-footer :height="headerHeight"></el-footer>-->


  </el-container>
</template>

<script>
  export default {
    data(){

      return {

      }
    },
    methods :{
      //路由到添加内容页面
      routeAddContent(){
        this.$router.replace('content-add')
      },

      //路由到预览内容界面
      contentPreview(content){
        this.$router.replace({
          path : "/content-preview" ,
          query : {'content':content}
        })
      },

      //添加内容成功,路由到管理界面
      contentAddSuccessed(){
        this.$router.replace('/content-manage')
      }
    }
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

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .router-link-active > .is-active{
    background-color: #B3C0D1;
  }

  html, body ,.app{ margin:0; height:100%; }
</style>
