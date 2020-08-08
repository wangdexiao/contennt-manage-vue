<template>
  <div id="poster">


    <div v-html="$route.query.content"></div>
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="username" auto-complete="off" placeholder="账号"/>
      </el-form-item>

      <el-form-item>
        <el-input type="passwd" v-model="passwd" auto-complete="off" placeholder="密码"/>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {login} from "../network/apis";

  export default {
    name: "login",
    data() {
      return {
        username: '',
        passwd: '',
        responseResult: []
      }
    },
    methods: {
      login() {

        login(this.username,this.passwd).
        then(res => {
          if(res.code === 200){
            this.$store.commit('setUserValue',res.data)
            this.$router.replace('/')
          }
        }).catch(err => {
          console.log(err)
        })
      }

    }
  }
</script>

<style scoped>
  #poster {
    background:url('../../public/loginbg0.gif') no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
