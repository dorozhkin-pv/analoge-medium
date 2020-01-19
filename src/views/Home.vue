<template>
  <div class="container">
    <div v-for="post in getPosts" :key="post.id">
      <Card :post="post" />
    </div>

    <Pagination :totalCount="getTotalCount" v-if="getTotalCount > 10"/>
  </div>
</template>

<script>
  import Card from '@/components/Card'
  import Pagination from '@/components/Pagination'

  import { mapGetters } from 'vuex'

  export default {
    name: 'Home',

    components: {
      Card,
      Pagination
    },

    computed: {
      ...mapGetters('medium', ['getPosts', 'getTotalCount'])
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
