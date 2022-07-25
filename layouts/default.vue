<template>
    
    <div class="flex flex-col md:flex-row h-screen">
        
        <template v-if="displayPreference">
            <Preferences @closePreference="changeDisplayPreferenceValue()" class="w-full md:w-96 navbarGray border"/>
        </template>
        
        <template v-else>
            <Navbar @openPreference="changeDisplayPreferenceValue()" class="w-full md:w-96 navbarGray border"/>
        </template>
        
        <Nuxt class="bg-blue-500 border minHeightContentMobile md:w-content"/>
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
  }
};
</script>
