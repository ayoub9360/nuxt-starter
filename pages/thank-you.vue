<template>
  <main class="login">
    <Navbar :data="commonContent" />
    <div class="login__wrapper">
      <h1>Inscription</h1>
      <p>
        Vous recevrez un email de confirmation lorsque votre inscription sera validée. <br />
        Afin de monter dans la fille d'attente, <br />
        vous pouvez partager le lien d'inscription en cliquant sur le boutton suivant
      </p>
      <p class="text">
        Vous êtes numéros <span>{{ number }}</span> dans la fille d'attente
      </p>
      <button v-if="!coppied" type="submit" class="btn btn-primary" @click="copyURL">Copier le lien de partage</button>
      <button v-if="coppied" type="submit" class="btn btn-primary">Lien copier !</button>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, i18n }) {
    const commonContent = await $content(i18n.locale, 'commonContent').fetch()
    return { commonContent }
  },
  data() {
    return {
      coppied: null,
      number: null,
    }
  },
  mounted() {
    this.$axios
      .get('https://api.countapi.xyz/hit/yibzeeV2/key')
      .then((response) => {
        this.number = response.data.value
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    async copyURL() {
      const mytext = 'https://yibzee.com/user/register'
      await navigator.clipboard.writeText(mytext)
      this.coppied = true
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  &__wrapper {
    margin: auto;
    display: flex;
    max-width: $max-width-wrapper;
    width: 90%;
    box-sizing: content-box;
    min-height: calc(100vh - 72px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 32px;
  }
  .text {
    font-size: 28px;
    text-align: center;
    line-height: 140%;
    margin-top: 16px;
    span {
      font-size: 42px;
      color: $blue;
    }
  }
  p:nth-child(2) {
    margin-top: 16px;
    text-align: center;
    color: rgb(124, 124, 124);
  }
  button {
    padding: 10px 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    background: $blue;
    color: white;
    display: block;
    margin: 16px auto;
  }
}
</style>
