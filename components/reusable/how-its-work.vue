<template>
  <div class="information">
    <div class="information__wrapper">
      <div class="content">
        <h2>{{ data.title }}</h2>
        <p>{{ data.description }}</p>
        <hr />
        <div class="cards-container">
          <CardItem v-for="(item, index) in data.cards" :key="index" :data="item" :index="index" />
        </div>
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
.information {
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background: $blue;
    z-index: 1;
    @media screen and (max-width: 500px) {
      height: 800px;
    }
  }
  &__wrapper {
    position: relative;
    z-index: 2;
    margin: auto;
    display: flex;
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 64px var(--horizontalPadding);
  }
  .content {
    width: 100%;
    h2 {
      text-align: center;
      margin-bottom: 26px;
      color: $white;
    }
    p {
      text-align: center;
      max-width: 800px;
      margin: auto;
      margin-bottom: 16px;
      color: $white;
    }
    hr {
      display: block;
      height: 2px;
      width: 100px;
      background: $white;
      border: none;
      margin: auto;
    }
  }
  .cards-container {
    margin-top: 130px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
