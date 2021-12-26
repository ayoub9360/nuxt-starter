<template>
  <div class="try">
    <div class="try__wrapper">
      <div class="content">
        <h2>{{ data.title }}</h2>
        <div class="qr">
          <img src="~/assets/images/home/qr-code.png" alt="Scannez ce qr code pour votre menu" />
          <img class="arrow arrow-1" src="~/assets/images/home/scan-me-1.png" alt="Arrow 1" />
          <img class="arrow arrow-2" src="~/assets/images/home/scan-me-2.png" alt="Arrow 2" />
          <img class="arrow arrow-3" src="~/assets/images/home/scan-me-3.png" alt="Arrow 2" />
          <!-- <img class="arrow arrow-4" src="~/assets/images/home/scan-me-4.png" alt="Arrow 2" /> -->
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
.try {
  &__wrapper {
    margin: auto;
    display: flex;
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 64px var(--horizontalPadding) 102px;
  }
  .content {
    position: relative;
    width: 100%;
    h2 {
      text-align: center;
      margin-bottom: 64px;
    }
    img {
      margin-top: 32px;
      margin: auto;
    }
    .qr {
      position: relative;
      width: max-content;
      margin: auto;
    }
    .arrow {
      position: absolute;
      &-1 {
        transform: translate(100%, 0%) rotate(50deg);
        bottom: -50px;
        right: 0px;
      }
      &-2 {
        transform: translate(-100%, 0%);
        top: -100px;
        left: -150px;
      }
      &-3 {
        transform: translate(-100%, 0%) rotate(-30deg) scale(0.8);
        bottom: -180px;
        left: 70px;
      }
      &-4 {
        transform: translate(100%, 0%);
        top: -70px;
        right: 10px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .try {
    .content {
      .arrow {
        &-1 {
          transform: translate(100%, 0%) rotate(50deg) scale(0.6);
          bottom: -50px;
          right: 60px;
        }
        &-2 {
          transform: translate(-100%, 0%) scale(0.6);
          top: -80px;
          left: -10px;
        }
        &-3 {
          transform: translate(-100%, 0%) scale(0.6);
          bottom: -100px;
          left: 50px;
        }
        &-4 {
          transform: translate(100%, 0%) scale(0.6);
          top: -70px;
          right: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 730px) {
  .try {
    .content {
      .arrow {
        display: none;
      }
    }
  }
}
</style>
