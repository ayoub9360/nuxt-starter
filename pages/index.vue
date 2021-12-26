<template>
  <main>
    <Navbar :data="commonContent" />
    <HeroHome :data="data.hero" />
    <Trust :data="data.trust" />
    <InformationWithImage :data="data.information" />
    <!-- <InformationWithImage2 :data="data.information" /> -->
    <Advantage :data="data.advantage" />
    <InformationSection :data="data.explaination" />
    <TryQrCode :data="data.tryIt" />
    <SimpleCta :data="data.cta" />
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
