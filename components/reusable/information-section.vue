<template>
  <div class="information">
    <div class="information__wrapper">
      <div class="content">
        <h2>{{ data.title }}</h2>
        <p>{{ data.description }}</p>
        <hr />
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
  &__wrapper {
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
    }
    p {
      text-align: center;
      max-width: 800px;
      margin: auto;
      margin-bottom: 16px;
    }
    hr {
      display: block;
      height: 2px;
      width: 100px;
      background: $blue;
      border: none;
      margin: auto;
    }
  }
}
</style>
