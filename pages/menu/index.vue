<template>
  <div class="menu">
    <div class="menu__wrapper">
      <!-- ---------- Selector ---------- -->
      <div v-if="step === 'selector'" class="selector">
        <div class="item" @click="goTo('menu')">
          <p>Menus</p>
          <img src="~/assets/images/menu/4.svg" alt="Icons" />
        </div>
        <div class="item" @click="goTo('boisson')">
          <p>Boissons</p>
          <img src="~/assets/images/menu/3.svg" alt="Icons" />
        </div>
        <div class="item" @click="goTo('dessert')">
          <p>Desserts</p>
          <img src="~/assets/images/menu/2.svg" alt="Icons" />
        </div>
        <div class="item" @click="goTo('autre')">
          <p>Autres</p>
          <img src="~/assets/images/menu/1.svg" alt="Icons" />
        </div>
      </div>
      <!-- ---------- Menu ---------- -->
      <div v-if="step === 'menu'" class="menu">
        <div v-for="(item, index) in plat" :key="index" class="item">
          <p>{{ item.product_name }}</p>
          <img :src="item.image[0].url" alt="Icons" />
          <p class="price">{{ item.price }} €</p>
        </div>
      </div>
      <!-- ---------- Boisson ---------- -->
      <div v-if="step === 'boisson'" class="boisson">
        <div v-for="(item, index) in boisson" :key="index" class="item">
          <p>{{ item.product_name }}</p>
          <img :src="item.image[0].url" alt="Icons" />
          <p class="price">{{ item.price }} €</p>
        </div>
      </div>
      <!-- ---------- Dessert ---------- -->
      <div v-if="step === 'dessert'" class="dessert">
        <div v-for="(item, index) in dessert" :key="index" class="item">
          <p>{{ item.product_name }}</p>
          <img :src="item.image[0].url" alt="Icons" />
          <p class="price">{{ item.price }} €</p>
        </div>
      </div>
      <!-- ---------- Autre ---------- -->
      <div v-if="step === 'autre'" class="autre"></div>
      <!-- ---------- Nav ---------- -->
      <div v-if="step !== 'selector'" class="nav">
        <div class="nav-item" @click="goTo('menu')">
          <img src="~/assets/images/menu/4.svg" alt="Icons" />
          <p>Menus</p>
        </div>
        <div class="nav-item" @click="goTo('boisson')">
          <img src="~/assets/images/menu/3.svg" alt="Icons" />
          <p>Boissons</p>
        </div>
        <div class="nav-item" @click="goTo('dessert')">
          <img src="~/assets/images/menu/2.svg" alt="Icons" />
          <p>Desserts</p>
        </div>
        <div class="nav-item" @click="goTo('menu')">
          <img src="~/assets/images/menu/1.svg" alt="Icons" />
          <p>Autres</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ isDev, $axios, route, store, env, params, query, req, res, redirect, error }) {
    const boisson = await $axios
      .get('https://strapi-qrcode.herokuapp.com/products?menu_id=44&type=boisson&_sort=id:DESC')
      .then((response) => {
        return response.data
      })
    const dessert = await $axios
      .get('https://strapi-qrcode.herokuapp.com/products?menu_id=44&type=dessert&_sort=id:DESC')
      .then((response) => {
        return response.data
      })
    const plat = await $axios
      .get('https://strapi-qrcode.herokuapp.com/products?menu_id=44&type=plat&_sort=id:DESC')
      .then((response) => {
        return response.data
      })
    return { boisson, dessert, plat }
  },
  data() {
    return {
      step: 'selector',
    }
  },
  methods: {
    goTo(step) {
      this.step = step
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  background: #f0f0f0;
  min-height: 100vh;
  padding-bottom: 100px;
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 32px;
  }
  .nav {
    display: flex;
    position: fixed;
    bottom: 0;
    background: $white;
    width: 100%;
    &-item {
      padding: 16px;
      width: calc(100% / 4);
      text-align: center;
      img {
        height: 36px;
        margin: auto;
      }
      &:hover {
        background: $blue;
        p {
          color: $white;
        }
        img {
          filter: invert(100%) sepia(0) saturate(2%) hue-rotate(348deg) brightness(112%) contrast(101%);
        }
      }
    }
  }
  .selector {
    width: 100%;
    .item {
      box-sizing: border-box;
      img {
        width: 40%;
        height: 100px;
      }
    }
  }
  .item {
    box-sizing: border-box;
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: $white;
    border-radius: 8px;
    box-shadow: 0 4px 24px 0 #2f2f2f30;
    &:not(:last-child) {
      margin-bottom: 32px;
    }
    img {
      height: 200px;
      margin: 20px;
    }
    p {
      font-size: 24px;
      font-weight: bold;
      color: $gray-ultradark;
    }
    .price {
      background: $blue;
      color: white;
      font-weight: 500;
      font-size: 18px;
      padding: 5px 10px;
      border-radius: 10px;
    }
  }
}
</style>
