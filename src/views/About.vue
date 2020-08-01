<template>
  <div class="about">
    <h1>This is an about page</h1>


    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
  export default{
    name : 'about',
    data(){
      return {
        radio: '1'
      }
    },

    methods() {




    },

    mounted()  {
        // 发送 POST 请求
      console.log("begining..............")
        this.$axios({
          method: 'get',
          url: '/api-getway/ribbon-consumer/ribbon-consumer',
          data: {

          }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  }

</script>
