<template>
    
    <div class="flex flex-col md:flex-row h-screen">
        
        <template v-if="displayPreference">
            <Preferences @closePreference="changeDisplayPreferenceValue()" class="w-full md:w-96 border bg-gray-200"/>
        </template>
        
        <template v-else>
            <Navbar @openPreference="changeDisplayPreferenceValue()" class="w-full md:w-96 border bg-gray-200"/>
        </template>
        
        <Nuxt class="bg-blue-500 border minHeightContentMobile md:w-content"/>
    </div>

</template>

<script>
export default {
  data() {
    return {
      displayPreference: false,
    };
  },
  methods: {
    changeDisplayPreferenceValue() {
      this.displayPreference = !this.displayPreference
    },
  }
};
</script>
