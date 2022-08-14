<template>
  <div class="flex flex-col items-center space-y-6">
    <div class="flex flex-row items-center justify-center space-x-4 mt-4">
        <div class="flex">
            <img width="90" src="/icon.png" alt="Le logo de CosmosDocs" />       
        </div>
        <h1 class="text-4xl xl:text-5xl">CosmosDocs.io</h1>
    </div>
    <div class="mx-auto w-5/6 xl:w-4/6 text-justify leading-relaxed flex flex-col justify-center items-center ">
        <nuxt-content class="space-y-4 prose" :document="home"/>
        <p class="mt-4">Si vous aimez le concept, notre contenu et vous souhaitez soutenir notre travail et le voir évoluer :</p>
        <a href="https://app.starname.me/profile/cosmos*docs" target="_blank">
          <button class="bg-green-400 rounded py-3 px-3 text-white font-bold w-60 mt-4">
            BUY ME A COFFEE !
          </button>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${process.env.WEBSITE_URL || "http://localhost:4500"}`,
        },
      ]
    }
  },
  async asyncData({ $content, params, store}) {
        const home = await $content("home").fetch();
        return { home }
    },
}
</script>

<style scoped>
/* a {
  color: #3377c0;
}

p {
  text-align: justify;
}

ul {
  list-style-type: disc;
}

ol {
  list-style-type: decimal;
} */

</style>
