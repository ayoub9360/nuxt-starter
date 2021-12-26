<template>
  <main>
    <Navbar :data="commonContent" />
    <HowItsWork :data="data.how" />
    <TryQrCode :data="data.tryIt" />
    <Advantage :data="data.advantage" />
    <Faq :data="data.faq" />
    <Contact :data="data.contact" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, i18n }) {
    const commonContent = await $content(i18n.locale, 'commonContent').fetch()
    const data = await $content(i18n.locale, 'howItsWork').fetch()
    return { data, commonContent }
  },
}
</script>
