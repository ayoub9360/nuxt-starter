<template>
  <section class="hero-home">
    <div class="hero-home__wrapper">
      <div class="content">
        <h1>{{ data.title }}</h1>
        <p>{{ data.subtitle }}</p>
        <div class="links">
          <nuxt-link v-for="(link, index) in data.links" :key="index" :to="link.href">{{ link.title }}</nuxt-link>
        </div>
      </div>
      <div class="cover">
        <img src="~/assets/images/home/hero-picture.png" alt="Yibzee qr code" />
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
.hero-home {
  background: $light-blue;
  &__wrapper {
    margin: auto;
    display: flex;
    max-width: $max-width-wrapper;
    padding: 0 var(--horizontalPadding);
    box-sizing: content-box;
    height: calc(100vh - 72px);
    min-height: 550px;
  }
  .content {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cover {
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  p {
    margin-top: 16px;
    max-width: 608px;
  }
  .links {
    margin-top: 0px;
    a {
      font-size: 16px;
      box-sizing: border-box;
      display: inline-block;
      margin-top: 32px;
      padding: 16px 32px;
      &:nth-child(1) {
        background: $blue;
        border-radius: 8px;
        color: $white;
      }
      &:nth-child(2) {
        margin-left: 8px;
        border: dashed 1px $blue;
        border-radius: 8px;
        color: $blue;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .hero-home {
    p,
    a {
      font-size: 16px;
    }
    .links {
      a {
        font-size: 16px;
        padding: 12px 16px;
      }
    }
  }
}

@media screen and (max-width: $breakpoint-mobile) {
  .hero-home {
    &__wrapper {
      flex-direction: column;
      padding: 64px var(--horizontalPadding);
    }
    p {
      width: 100%;
    }
    .links {
      a {
        width: 100%;
        text-align: center;
        &:nth-child(2) {
          margin: 16px 0 0;
        }
      }
    }
    .content {
      width: 100%;
    }
    .cover {
      margin-top: 32px;
      width: 100%;
    }
  }
}
</style>
