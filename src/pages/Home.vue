<template lang="pug">
div.wrapper
    <Gallery />
    <Features />
    <Intro />
</template>

<script>
import Gallery from '../components/Gallery.vue'
import Features from '../components/Features.vue'
import Intro from '../components/Home/Intro.vue'
export default {
    components: {
        Gallery,
        Features,
        Intro
    }
}
</script>