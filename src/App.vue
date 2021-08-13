<template lang="pug">
<Header />
main.page
    <router-view />

</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
      Header
  }
}
</script>


<style lang="sass">
.page
    margin-top: 25px
</style>
