<template>
    
    <div class="flex flex-col md:flex-row h-screen">
        
        <template v-if="displayPreference">
            <Preferences @closePreference="changeDisplayPreferenceValue()" class="w-full md:w-96 navbarGray border"/>
        </template>
        
        <template v-else>
            <Navbar @openPreference="changeDisplayPreferenceValue()" class="w-full md:w-96 navbarGray border"/>
        </template>
        
        <Nuxt class="bg-blue-500 border minHeightContentMobile md:w-content"/>
        <ul class="w-full bg-red-100">
          <button class="w-20 h-10 bg-green-100" @click="testLocalStorage">test</button>
          <li class="h-10" v-for="el in items" :key="el">el</li>
        </ul>
    </div>

</template>

<script>
export default {
  data() {
    return {
      displayPreference: false,
      items: []
    };
  },
  methods: {
    changeDisplayPreferenceValue() {
      this.displayPreference = !this.displayPreference
    },
    async testLocalStorage() {
      await this.$localForage.setItem("cache", ["icicicicic", "allalalala", "fepkfzep", "feonfze"])
      this.items = await this.$localForage.getItem("cache")
      console.log(this.items)
    }
  }
};
</script>
