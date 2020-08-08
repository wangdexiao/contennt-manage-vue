<template>
        <!--侧边栏-->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

          <el-menu style=";height: 100%" :default-openeds="['1'/*, '3'*/]">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"/>内容管理</template>
                <router-link to="/rich-text"  ><el-menu-item index="1-1">富文本</el-menu-item></router-link>
                <router-link to="/content-manage"> <el-menu-item index="1-2">内容管理</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"/>账号管理</template>
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
              <template slot="title"><i class="el-icon-setting"/>权限管理</template>
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
</template>

<script>
  export default {
    name: 'HomeSider'
  }
</script>

<style scoped>

  .el-aside {
       background-color: #D3DCE6;
       color: #333;
       text-align: center;
       line-height: 200px;
     }

</style>
