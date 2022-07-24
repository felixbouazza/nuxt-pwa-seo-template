<template>
  <div class="flex flex-col md:flex-row h-screen">
    <template v-if="displayPreference"
      ><Preferences class="w-full md:w-96 navbarGray dark:navbarBlack border"
    /></template>
    <template v-else
      ><Navbar class="w-full md:w-96 navbarGray dark:navbarBlack border"
    /></template>
    <Nuxt class="w-full bg-blue-500 border" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayPreference: false,
    };
  },
};
</script>

<style scoped>
.navbarGray {
  background-color: #eee;
}
</style>
