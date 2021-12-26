<template>
  <div class="cta">
    <div class="cta__wrapper">
      <div class="content">
        <h2>{{ data.title }}</h2>
        <p>{{ data.description }}</p>
        <nuxt-link :to="data.link.href">{{ data.link.title }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.cta {
  background: $blue;
  &__wrapper {
    margin: auto;
    display: flex;
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 64px var(--horizontalPadding);
  }
  .content {
    position: relative;
    width: 100%;
    h2 {
      text-align: center;
      margin-bottom: 16px;
      color: white;
    }
    p {
      max-width: 700px;
      margin: auto;
      margin-bottom: 16px;
      color: white;
    }
    a {
      box-sizing: border-box;
      padding: 16px 32px;
      background: white;
      color: $blue;
      border-radius: 8px;
      display: block;
      width: max-content;
      margin: 32px auto 0;
    }
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .cta {
    .content {
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
