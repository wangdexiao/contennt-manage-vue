<template>
    <!--头部-->
    <el-header  style="text-align: right; font-size: 12px" >
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          <span v-text="userName"/><i class="el-icon-arrow-down el-icon--right"/>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="signout">退出账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

</template>

<script>

  // import ssoconfig from '../../configs/sso'
  import {getUserInfo,userLogout} from '../../network/apis'

  export default {
    name: 'HomeHeader',
    data() {
      return {
        userName: '',
      }
    },
    mounted () {

      this.userName = this.$store.getters.getUserName
      if(this.$utils.isEmpty(this.userName)){
        let _this = this;
        getUserInfo()
        .then(res => {

          _this.$store.commit('setUserValue',JSON.stringify(res.data))
          this.userName = this.$store.getters.getUserName
        })
        .catch(err => {
          console.log(err)
          _this.$message.error(err.msg)
        })
      }
    },
    methods: {
      handleCommand(command){
        let _this = this;
        if(command === 'signout'){
          // ssoconfig.logout()
          userLogout()
          .then(res => {
            //退出登录成功 清除数据
            _this.$store.commit('clearUserValue')
            window.location.reload()
          })
          .catch(err => {
            console.error(err)
            this.$message.error(err)
          })
        }
      }
    },

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
