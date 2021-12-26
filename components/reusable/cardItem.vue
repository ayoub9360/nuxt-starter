<template>
  <div class="card">
    <span>{{ index + 1 }}</span>
    <img :src="require(`../../assets/images/howItsWork/illustration-${index + 1}.png`)" alt="Illustration qr code" />
    <p>{{ data.title }}</p>
    <p>{{ data.text }}</p>
  </div>
</template>

<script>
export default {
  props: ['data', 'index'],
}
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  background: $white;
  border: 1px solid rgb(230, 229, 229);
  width: calc((100% / 3) - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 75px 32px 32px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  img {
    width: 180px;
    height: 180px;
  }
  span {
    color: $gray-ultradark;
    font-family: $font-default;
    font-weight: 500;
    font-size: 48px;
    line-height: 110%;
    background: $white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    position: absolute;
    top: -50px;
    border: 3px solid #e5e5e5;
  }
  p:first-of-type {
    font-weight: bold;
    line-height: 140%;
    color: rgb(26, 26, 26);
    margin-top: 32px;
  }
  p {
    margin-top: 18px;
    font-size: 16px;
    text-align: center;
  }
}

@media screen and (max-width: 1050px) {
  .card {
    width: calc((100% / 3) - 10px);
  }
}

@media screen and (max-width: 777px) {
  .card {
    margin-top: 64px;
    width: 100%;
  }
}
</style>
