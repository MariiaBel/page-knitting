<template lang="pug">
article.intro
    section.intro__about
        .intro__about-content
            h2.h2.intro__about-desc {{ intro.about.title }}
            p {{ intro.about.desc }}
            router-link.link.intro__about-link(:to="{name: 'about'}") {{ intro.about.link }}
        .intro__about-video
            video.intro__about-video-item(:poster="`${intro.about.videoPoster}`")
                source(src="https://youtu.be/5lmorfiLulM" type="video/mp4")
            button.intro__about-video-btn
</template>

<script>
import  { homeIntro } from '@/_data'
export default {
    data() {
        return {
            intro: homeIntro
        }
    },
    methods: {
    }
}
</script>

<style lang="sass">
.intro
    
    &__about
        padding-bottom: 80px
        &-desc
            margin-top: 10px
        &-link
            display: block
            text-align: right
            margin-top: 20px
        &-video
            margin-top: 20px
            position: relative
            &-item
                background-color: #F9EDF0
                border: 1px solid var(--c-accent)
                height: 215px
                width: 100%
                object-fit: cover
            &-btn
                padding: 0
                margin: 0
                background: white
                border: 3px solid var(--c-accent)
                border-radius: 50%
                width: 60px
                height: 60px
                display: flex
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                cursor: pointer
                &::after
                    content: ""
                    position: relative
                    margin: auto
                    border: 25px solid transparent
                    border-left-color:  var(--c-accent)
                    border-top-width: 15px
                    border-bottom-width: 15px
                    transform: translateX(35%)
                &:focus
                    outline: none
                    border: 4px  solid var(--c-accent)     
@media screen and (min-width: 768px)
    .intro
        padding-left: 65px
        padding-right: 65px
        &__about
            display: grid
            grid-template-columns: 7fr 5fr
            column-gap: 30px
            align-items: center
@media screen and (min-width: 1140px)
    .intro
        &__about
            grid-template-columns: 1fr 350px
            column-gap: 87px
                    
                                            </style>