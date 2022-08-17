<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center justify-center space-x-4 mt-4">
      <img width="90" src="/icon.png" alt="Le logo de CosmosDocs" />
      <h1 class="text-3xl">Glossaire technique</h1>
    </div>

    <div class="mt-5 flex justify-center">
      <p class="text-center">
        Ce glossaire a pour but de vulgariser la définition des mots techniques
        utilisés sur le site et de faciliter la compréhension pour tout le
        monde.
      </p>
    </div>


    <div class="mt-10 mx-2">
      <ul class="space-y-2">
        <li
          v-for="glossaire in glossaires"
          :key="glossaire"
          class="flex flex-col"
        >
          <span class="underline text-xl"> -{{ glossaire.title }} :</span>
          <span class="italic">{{ glossaire.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params, store }) {
    const glossaires = await $content("glossaire").fetch();
    return { glossaires };
  },
};
</script>