<template>
    <!--头部-->
    <el-header  style="text-align: right; font-size: 12px" >
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 40px;
  }

</style>
