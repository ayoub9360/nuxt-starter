<template>
  <section class="contact">
    <div class="contact__wrapper">
      <img src="~/assets/images/avatar-group.png" alt="Groupe d'avatar" />
      <h4>Still have a question ?</h4>
      <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      <div class="links">
        <nuxt-link to="/">Contact</nuxt-link>
        <nuxt-link to="/">Demander une démo</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding: 64px 0;
  &__wrapper {
    margin: auto;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.068);
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 108px var(--horizontalPadding);
    background: $light-blue;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    margin-top: 16px;
  }
  p {
    margin-top: 8px;
  }
  .links {
    a {
      font-size: 16px;
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
</style>
