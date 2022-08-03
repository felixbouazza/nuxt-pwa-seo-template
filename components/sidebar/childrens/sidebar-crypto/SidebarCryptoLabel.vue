<template>
  <div class="flex flex-row py-1">
    <template v-if="isSettingsSidebar">
        <div class="flex items-center">
            <img :src="logo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
        </div>
        <p class="ml-2">{{ crypto.title }}</p>
    </template>
    <template v-else>
        <nuxt-link :to="crypto.path" class="flex flex-row">
            <div class="flex items-center">
                <img :src="logo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
            </div>
            <p class="ml-2">{{ crypto.title }}</p>
        </nuxt-link>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        crypto: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapState({
            isSettingsSidebar: (state) => state.isSettingsSidebar,
        }),
        logo() {
            if (this.$colorMode.preference == "light") return this.crypto.navbarLogo
            return this.crypto.navbarDarkLogo
        }
    }
}
</script>

<style>

</style>