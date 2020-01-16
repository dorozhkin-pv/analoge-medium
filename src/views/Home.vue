<template>
  <div class="container">
    <Card />
  </div>
</template>

<script>
  import Card from '@/components/Card'

  export default {
    name: 'Home',

    components: {
      Card
    },

    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    margin-top: 15px;
  }
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
