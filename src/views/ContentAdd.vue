<template>
  <div class="app">
    <rich-txt @addSuccessed="addSuccessed"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import RichTxt from '@/components/RichTxt.vue'

  export default {
    name: 'ContentAdd',
    components: {
      RichTxt
    },
    methods:{
      addSuccessed(){
        this.$emit("addSuccessed")
      }
    }
  }
</script>
