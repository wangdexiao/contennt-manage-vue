<template>
  <div id="poster">
    <div class="login-container" v-html="$route.query.content"></div>
  </div>
</template>

<script>
  import {login} from "../network/apis";

  export default {
    name: "login",
    data() {
      return {

      }
    },
    methods: {


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
