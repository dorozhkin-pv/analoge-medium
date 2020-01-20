<template>
  <div id="app">
    <nav-bar v-if="!page404" />
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'

  export default {
    name: 'App',

    components: {
      NavBar
    },
    
    computed: {
      page404() {
        return this.$route.name === 'page404'
      }
    }
  }
</script>
