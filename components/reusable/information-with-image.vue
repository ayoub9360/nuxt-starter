<template>
  <div class="information">
    <div class="information__wrapper">
      <div class="content">
        <h2 v-if="data.title">{{ data.title }}</h2>
        <p>{{ data.description }}</p>
        <nuxt-link :to="data.link.href">{{ data.link.title }}</nuxt-link>
      </div>
      <div class="cover">
        <img src="~/assets/images/home/mobile-illustration.svg" alt="Scan d'un qr code yibzee" />
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
  background: $blue;
  &__wrapper {
    margin: auto;
    display: flex;
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 120px var(--horizontalPadding);
  }
  .content {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: $white;
    }
    p {
      margin-top: 16px;
      color: $white;
    }
    a {
      margin-top: 16px;
      color: $blue;
    }
  }
  .cover {
    width: 40%;
    display: flex;
    justify-content: center;
    img {
      width: 70%;
    }
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .information {
    &__wrapper {
      padding: 64px var(--horizontalPadding);
      flex-direction: column;
    }
    .content,
    .cover {
      width: 100%;
    }
    .cover {
      margin-top: 32px;
      img {
        max-height: 300px;
      }
    }
  }
}
</style>
