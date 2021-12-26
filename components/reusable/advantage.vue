<template>
  <section class="advantage">
    <div class="advantage__wrapper">
      <h3>{{ data.eyebrow }}</h3>
      <h2>{{ data.title }}</h2>
      <p>{{ data.subtitle }}</p>
      <div class="cards-container">
        <div v-for="(item, index) in data.cards" :key="index" class="card">
          <img src="~/assets/images/featured-icon.svg" alt="Message icon" />
          <h4>{{ item.title }}</h4>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.advantage {
  background: $light-blue;
  &__wrapper {
    margin: auto;
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 108px var(--horizontalPadding);
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: $gray-ultradark;
  }
  h2 {
    font-size: 32px;
    font-weight: 600;
    color: $blue;
  }
  p {
    margin-top: 16px;
    color: $gray-dark;
    font-weight: 300;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;
    justify-content: space-between;
  }
  .card {
    box-sizing: border-box;
    background: $white;
    width: max-content;
    width: calc((90% / 3));
    padding: 24px;
    border-radius: 8px;
    @media screen and (max-width: 900px) {
      width: 100%;
      margin-bottom: 32px;
    }
    img {
      margin-bottom: 16px;
    }
    h4 {
      color: $blue;
      font-size: 20px;
      font-weight: 600;
    }
    p {
      color: $gray-dark;
      font-size: 16px;
    }
  }
}
</style>
