<template lang="pug">
header.header
    .header__top
        .wrapper.header__top-wrap
            .header__logo.icon.icon--logo(aria-label="логотип компании СИЖУВЯЖУ")
            ul.header__top-list
                li.header__top-item
                    .icon.icon--address.header__top-item-icon
                    div
                        div м. Кропоткинская
                        div Соймоновский проезд, д.7 с.1
                li.header__top-item
                    .icon.icon--time.header__top-item-icon
                    div
                        div Пн - Пт     11 - 20
                        div Сб - Вск    11 - 18
                li.header__top-item
                    .icon.icon--phone.header__top-item-icon
                    div
                        div +7 800 000 00 00
                        div +7 800 000 00 00
            router-link.header__top-basket(:to="{name: 'basket'}" area-label="Перейти в карзину")
                .icon.icon--basket
    .header__menu(:class="{ active:isActiveMenu }")
        button.icon.icon--hamburger.header__hamburger(area-label="открыть/закрыть главное меню" tabindex="0" @click="onClickHamburger" :class="{ active:isActiveMenu }")
            .icon__line
            .icon__line
        nav.header__nav(:class="{ active:isActiveMenu }")
            ul.header__nav-list
                li.header__nav-item(v-for="item in navLinks" :key="item.alias")
                    router-link.header__nav-link(:to="{name: item.alias}") {{ item.title }}
</template>

<script>
import { navLinks } from '../_config'
export default {
    data() {
        return {
            navLinks: navLinks,
            isActiveMenu: false
        }
    },
    methods: {
        onClickHamburger() {
            this.isActiveMenu = !this.isActiveMenu
        }
    }
}
</script>

<style lang="sass" >
.header
    padding-top: 10px
    position: relative
    z-index: 2
    &__logo
        margin: 0 auto
    &__top
        &-list
            margin: 30px 0 0
            padding: 0
            list-style: none
        &-item
            display: grid
            grid-template-columns: 60px 1fr
            align-items: center
            margin-top: 20px
            &-icon
                transform: scale(0.8)
        &-basket
            position: fixed
            top: 5px
            right: 15px
            transform: scale(0.8)
            z-index: 3
    &__menu 
        overflow-y: hidden
        position: fixed
        top: 0
        width: 100%
        height: 50px
        transition: height 1s 
        &.active
            height: 100%
    &__nav
        background: var(--c-accent)
        font-weight: 700
        padding: 20px 0
        margin: 0
        text-align: center
        transform: translateY(-100%)
        transition: transform 0.8s cubic-bezier(0.3, 0.5, 0, 1)
        &.active 
            transform: translateY(0)
        &-list
            list-style: none
            padding: 0
        &-link
            display: inline-block
            vertical-align: baseline
            color: white
            text-decoration: none
            padding: 12px 15px
    .header__hamburger
        font-size: 16px
        position: absolute
        left: var(--wrapper)
        z-index: 1
        top: 5px
        &.active
            .icon__line
                background-color: white

@media screen and (min-width: 768px)
    .header
        &__top
            &-list
                display: grid
                grid-template-columns: 1fr 1fr 1fr
            &-item
                display: flex
                flex-direction: column
                text-align: center

@media screen and (min-width: 1140px)
    .header
        &__menu
            position: relative
            overflow: initial
        &__logo
            margin: 0
        &__nav
            padding: 0
            transform: none
            &-list
                display: flex
                flex-direction: row
                align-items: center
                justify-content: center
                margin: 0
        &__top
            &-basket
                transform: none
                position: relative
                top: 0
                margin-left: auto
            &-wrap
                display: grid
                align-items: center
                grid-template-columns: 2fr 9fr 1fr
                column-gap: 30px
                padding-top: 20px
                padding-bottom: 20px
            &-list
                display: flex
                flex-direction: row
                align-items: center
                justify-content: space-between
                margin: 0
            &-item
                flex-direction: row
                text-align: left
                margin-top: 0
                &-icon
                    transform: none
                    margin-right: 15px
        
        .header__hamburger
            display: none
// @include media-to('xlg')

</style>