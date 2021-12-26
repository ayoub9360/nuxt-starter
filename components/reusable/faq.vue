<template>
  <section class="faq">
    <div class="faq__wrapper">
      <div class="container">
        <h2>{{ data.title }}</h2>
        <p class="subtitle">{{ data.subtitle }}</p>
        <div class="accordion">
          <div v-for="(item, index) in data.items" :key="index" class="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span class="accordion-title">{{ item.title }}</span
              ><span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  mounted() {
    const items = document.querySelectorAll('.accordion button')
    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded')
      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false')
      }
      if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true')
      }
    }
    items.forEach((item) => item.addEventListener('click', toggleAccordion))
  },
}
</script>

<style lang="scss" scoped>
.faq {
  &__wrapper {
    margin: auto;
    max-width: $max-width-wrapper;
    box-sizing: content-box;
    padding: 108px var(--horizontalPadding);
  }
  h2 {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 140%;
  }
  .subtitle {
    text-align: center;
    margin-top: 16px;
    color: $gray-dark;
    font-weight: 300;
    margin-bottom: 64px;
  }
}
.accordion {
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  margin: auto;
  .accordion-item {
    border-bottom: 1px solid $gray-light;
    button[aria-expanded='true'] {
      border-bottom: 1px solid $blue;
    }
  }
  button {
    position: relative;
    display: block;
    text-align: left;
    width: 100%;
    padding: 1em 0;
    color: $gray-medium;
    font-size: 1.15rem;
    font-weight: 400;
    border: none;
    background: none;
    outline: none;
    &:hover,
    &:focus {
      cursor: pointer;
      color: $blue;
      &::after {
        cursor: pointer;
        color: $blue;
        border: 1px solid $blue;
      }
    }
    .accordion-title {
      padding: 1em 1.5em 1em 0;
    }
    .icon {
      color: $blue;
      display: inline-block;
      position: absolute;
      top: 18px;
      right: 0;
      width: 22px;
      height: 22px;
      border: 1px solid;
      border-radius: 22px;
      &::before {
        display: block;
        position: absolute;
        content: '';
        top: 9px;
        left: 5px;
        width: 10px;
        height: 2px;
        background: currentColor;
      }
      &::after {
        display: block;
        position: absolute;
        content: '';
        top: 5px;
        left: 9px;
        width: 2px;
        height: 10px;
        background: currentColor;
      }
    }
  }
  button[aria-expanded='true'] {
    color: $blue;
    .icon {
      &::after {
        width: 0;
      }
    }
    + .accordion-content {
      opacity: 1;
      max-height: 9em;
      transition: all 200ms linear;
      will-change: opacity, max-height;
    }
  }
  .accordion-content {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 200ms linear, max-height 200ms linear;
    will-change: opacity, max-height;
    p {
      font-size: 1rem;
      font-weight: 300;
      margin: 2em 0;
    }
  }
}
</style>
