<template>
    <div  ><!--id="app"-->

      <div v-html="$route.query.content">

<!--        {{$route.query.content}}-->
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ContentPreview'
  }
</script>

<style scoped>

</style>
