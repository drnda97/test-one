<template>
  <div id="app">
    <Gists />
  </div>
</template>

<script>
// import Gists from './pages/Gists/Gists.vue'
import Gists from './pages/GistsVuex/GistsWithVuex.vue'

export default {
  name: 'App',
  components: {
    Gists
  }
}
</script>
