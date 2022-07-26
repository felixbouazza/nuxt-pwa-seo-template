<template>
    <div class="flex flex-col">
        
        <div class="flex flex-row justify-between items-center">
            <li class="flex">

                <button @click="toggleCryptoSubMenu">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <template v-if="cryptoSubMenuIsActive">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M12 16l-6-6h12z"/>
                      </template>
                      <template v-else>
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M16 12l-6 6V6z"/>
                      </template>
                    </svg>
                </button>

                <template v-if="isPreference">
                  <img :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
                </template>
                <template v-else>
                  <nuxt-link :to="crypto.path" class="flex flex-row">
                      <img :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
                  </nuxt-link>
                </template>
            </li>
            <div v-if="isPreference">
              <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            </div>
        </div>
           
        <ul v-if="cryptoSubMenuIsActive" class="space-y-2 pl-14 py-2">
            <li v-for="subMenu in cryptoSubMenu" :key="subMenu" class="flex flex-row justify-between items-center">
              <span>{{ subMenu }}</span>
              <div v-if="isPreference">
                <input type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
  data() {
    return {
      cryptoSubMenu: ["Actualités", "Gouvernances", "Airdrops", "Staking"],
      cryptoSubMenuIsActive: false,
    };
  },
  props: {
    crypto: {
      type: Object,
      required: true,
    },
    isPreference: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    async toggleCryptoSubMenu() {
      this.cryptoSubMenuIsActive = !this.cryptoSubMenuIsActive;
    },
  },
};
</script>

<style>
</style>