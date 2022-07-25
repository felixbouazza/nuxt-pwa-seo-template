<template>
    <div class="flex flex-col">
        
        <div class="flex flex-row justify-between">
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
                  <nuxt-link :to="crypto.path" class="flex flex-row w-full hover:bg-gray-300">
                      <img :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
                  </nuxt-link>
                </template>
            </li>
            <div class="flex items-center" :key="crypto.title" v-if="isPreference">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            </div>
        </div>
           
        <ul v-if="cryptoSubMenuIsActive">
            <li v-for="subMenu in cryptoSubMenu" :key="subMenu">
                {{ subMenu }}
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