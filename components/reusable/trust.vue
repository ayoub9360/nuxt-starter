<template>
  <div class="trust">
    <div class="trust__wrapper">
      <h3>{{ data.title }}</h3>
      <div class="images">
        <img v-for="(item, index) in 8" :key="index" src="~/assets/images/home/restaurant-trust.png" alt="O'sun" />
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
.trust {
  &__wrapper {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 32px var(--horizontalPadding);
    max-height: 180px;
    overflow: hidden;
  }
  .images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-height: 84px;
    overflow: hidden;
    img {
      margin-top: 16px;
    }
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .trust {
  }
}
</style>
