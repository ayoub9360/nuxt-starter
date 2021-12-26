<template>
  <nav :lang="$i18n.locale" class="nav">
    <div class="nav__wrapper">
      <ul>
        <li v-for="(link, index) in data.links" :key="index">
          <nuxt-link :to="link.href">{{ link.title }}</nuxt-link>
        </li>
      </ul>
      <ul class="right">
        <div class="lang">
          <li>
            <span>{{ flag($i18n.locale) }}</span>
            {{ $i18n.locale.toUpperCase() }}
          </li>
          <div class="select">
            <nuxt-link :to="`/fr`">{{ flag('fr') }} FR</nuxt-link>
            <nuxt-link :to="`/en`">{{ flag('gb') }} EN</nuxt-link>
          </div>
        </div>
        <li v-for="(link, index) in data.rightLinks" :key="index">
          <nuxt-link :to="link.href">{{ link.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
const { flag } = require('country-emoji')

export default {
  props: ['data'],
  methods: {
    flag(country) {
      if (country === 'en') country = 'gb'
      return flag(country)
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  background: $white;
  z-index: 999;
  &__wrapper {
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 0 var(--horizontalPadding);
    height: 72px;
    margin: auto;
    display: flex;
    ul {
      display: flex;
      align-items: center;
      &:nth-child(1) {
        margin-right: auto;
      }
      li {
        margin-right: 18px;
        cursor: pointer;
        a {
          font-size: 16px;
        }
      }
    }
    .right {
      position: relative;
      .lang {
        position: relative;
        z-index: 1;
        &:hover {
          .select {
            display: block;
          }
        }
        .select {
          display: none;
          width: 150px;
          background: $white;
          box-shadow: 1px 7px 25px 0px #88888893;
          border-radius: 8px;
          transform: translate(-50%, 100%);
          left: calc(50% - 16px);
          bottom: 0px;
          position: absolute;
          z-index: 1;
          &:hover {
            display: block;
          }
          a {
            display: block;
            padding: 5px 15px;
            border-radius: 8px;
            margin: 10px;
            &:hover {
              background: $light-blue;
            }
          }
        }
      }
      li {
        &:last-child {
          margin-right: 0px;
        }
        span {
          margin-right: 5px;
        }
        &:nth-child(2) {
          a {
            padding: 10px 20px;
            border-radius: 8px;
            color: $blue;
            border: dashed $blue 1px;
          }
        }
        &:nth-child(3) {
          a {
            background: $blue;
            padding: 10px 20px;
            border-radius: 8px;
            color: $white;
            border: solid $blue 1px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .nav {
    display: none;
  }
}
</style>
