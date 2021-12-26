<template>
  <main class="login">
    <Navbar :data="commonContent" />
    <div class="login__wrapper">
      <h1>Login to your account</h1>
      <h3>Welcome back ! Please enter your details.</h3>
      <form>
        <div class="form-group">
          <label for="email">Email :</label>
          <input id="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
          <p id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</p>
        </div>
        <div class="form-group">
          <label for="password">Password :</label>
          <input id="password" type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, i18n }) {
    const commonContent = await $content(i18n.locale, 'commonContent').fetch()
    const data = await $content(i18n.locale, 'home').fetch()
    return { data, commonContent }
  },
}
</script>

<style lang="scss" scoped>
.login {
  &__wrapper {
    margin: auto;
    display: flex;
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    min-height: calc(100vh - 72px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 32px;
  }
  h3 {
    font-size: 16px;
    color: $gray-light;
  }
  input {
    padding: 10px 20px;
    border: 1px solid #e2e8f0;
    font-family: $font-default;
  }
  form {
    width: 100%;
    @media screen and (max-width: $breakpoint-mobile) {
      width: 90%;
    }
    button {
      padding: 10px 20px;
      border-radius: 8px;
      width: 100%;
      max-width: 600px;
      background: $blue;
      color: white;
      display: block;
      margin: auto;
    }
    .form-group {
      margin: 24px auto;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 600px;
      label {
        font-size: 16px;
      }
      p {
        margin-top: 8px;
        font-size: 12px;
        color: $gray-light;
      }
    }
  }
}
</style>
