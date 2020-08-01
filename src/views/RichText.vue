<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <rich-txt />
  </div>
</template>

<script>
  // @ is an alias to /src
  import RichTxt from '@/components/RichTxt.vue'

  export default {
    name: 'RichText',
    components: {
      RichTxt
    }
  }
</script>
