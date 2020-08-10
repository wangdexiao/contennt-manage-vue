<template>
    <!--头部-->
    <el-header  style="text-align: right; font-size: 12px" >
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          <span v-text="$store.getters.userName"/><i class="el-icon-arrow-down el-icon--right"/>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="signout">退出账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

</template>

<script>

  import {userLogout} from '../../network/apis'

  export default {
    name: 'HomeHeader',


    methods: {
      handleCommand(command){
        if(command === 'signout'){
          userLogout()
          .then(res =>{
            this.$message.info("退出成功")
            this.$router.replace("/rich-text")
          }).catch(err => {
            this.$message.info("退出失败")
          })

        }
      }
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

</style>
