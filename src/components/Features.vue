<template lang="pug">
section.features
    ul.features__list
        li.features__item(v-for="item, key in features" :key="key")
            .icon.features__item-icon(:class="`icon--${item.icon}`")
            p.features__item-text {{ item.text }}
</template>

<script>
import { features } from '@/_data'
export default {
    data() {
        return {
            features: features
        }
    }
}
</script>

<style lang="sass">
.features
    &__list
        list-style: none
        padding: 0
        margin: 70px 0
        font-weight: 800
        color: var(--c-accent)
    &__item
        display: grid
        grid-template-columns: 1fr 1fr
        align-items: center
        column-gap: 20px
        margin-top: 20px
        &-icon
            margin: auto
            transform: scale(0.7)
        &-text
            font-size: 16px
            line-height: 21px

@media screen and (min-width:768px)
    .features
        padding-left: 65px
        padding-right: 65px
        &__list
            display: grid
            grid-template-columns: 1fr 1fr

@media screen and (min-width:1140px)
    .features
        &__list
            grid-template-columns: repeat(5, min-content)
            justify-content: space-between
            margin-bottom: 40px
        &__item
            display: grid
            grid-template-columns: 1fr
            grid-template-rows: 90px 1fr
            text-align: center
            margin-top: 0px
            min-width: 140px
            align-items: flex-start
            &-icon
                transform: none
            &-text
                font-size: 14px
                line-height: 17px
</style>