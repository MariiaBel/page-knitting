<template lang="pug">
.gallery
    .gallery__container
        ul.gallery__list(:style="`transform:translate3D( ${translateX}%, 0, 0)`")
            li.gallery__item(v-for="item, key in galleryItems" :key="key" )
                picture.gallery__pic
                    source(type='image/webp' media='(min-width: 1140px)' :srcset="item.imgLgWebp")
                    source(type='image/webp' media='(min-width: 768px)' :srcset="item.imgMdWebp")
                    source(type='image/webp' :srcset="item.imgSmWebp")
                    source(media='(min-width: 1140px)' :srcset="item.imgLg")
                    source(media='(min-width: 768px)' :srcset="item.imgMd")
                    img.gallery__img(:src="item.imgSm" width='320' height='400' alt='')

        ul.gallery__pagination
            li.gallery__pagination-item(
                v-for="item, key in galleryItems" 
                :key="key")
                button.gallery__pagination-btn(
                    :data-gallery-page="key"
                    :aria-label="`посмотреть слайд номер ${key}`"
                    :class="currentSlide==key? 'active': ''"
                    @click="changeSlideByKey(key)")
        button.gallery__toggle.gallery__toggle--prev(
            tabindex="0"
            @click="changeSlide(-1)"
            :disabled="currentSlide == 0")
        button.gallery__toggle.gallery__toggle--next(
            tabindex="0"
            @click="changeSlide(1)"
            :disabled="currentSlide == galleryItems.length -1 ")
</template>

<script>
import { galleryItems } from '@/_config'
export default {
    data() {
        return {
            galleryItems: galleryItems,
            interval: 0,
            currentSlide: 0
        }
    },
    computed: {
        translateX() {
            return - this.currentSlide * 100 
        }
    },
    methods: {
        changeSlide(number) {
            this.currentSlide = this.currentSlide + number
         },
        changeSlideByKey(key) {
            this.currentSlide = key
        }
    }

}
</script>

<style lang="sass">
.gallery
    &__container
        width: 100%
        height: 100%
        overflow: hidden
        position: relative
    &__list
        position: relative
        width: 100%
        height: 100%
        z-index: 1
        display: flex
        transition: transform 0.7s ease-in-out
        box-sizing: content-box
        list-style: none
        padding: 0
        margin: 0
    &__item
        flex-shrink: 0
        height: 100%
        width: 100%
        position: relative
    &__pic
        width: 100%
    &__img
        width: 100%
        height: 100%
        max-height: 500px
        object-fit: cover
        object-position: center
            
    &__pagination
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        width: 170px
        padding: 0
        margin: 0
        position: absolute
        bottom: 25px
        left: 50%
        transform: translateX(-50%)
        z-index: 1
        list-style: none
        &-btn
            display: block            
            width: 10px
            height: 10px
            border-radius: 50%
            background-color: white
            padding: 0
            border: none
            &.active, &:hover
                background-color: var(--c-accent)
    &__toggle
        width: 30px
        height: 30px
        border-radius: 50%
        background: #FFFFFF
        border: 1px solid #497952
        position: absolute
        top: calc(50% - 15px)
        z-index: 1
        display: flex
        cursor: pointer
        &:disabled
            display: none
        &:after
            margin: auto
            content: ""
            width: 8px
            height: 8px
            border-bottom:2px solid #497952
            border-right:2px solid #497952
        &--prev
            left: 10px
            &::after
                transform: rotate(135deg)
        &--next
            right: 10px
            &::after
                transform: rotate(-45deg)

        &:hover
            background-color: var(--c-accent)
            border-color: white
            &::after
                border-color: white        
        &:focuse-visible
            outline: 2px solid var(--c-accent)
@media screen and (min-width: 768px)
    .gallery
        &__toggle
            &--prev
                left: 20px
            &--next
                right: 20px
                    </style>