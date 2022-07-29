<template>
  <div class="flex flex-row py-1">
    <template v-if="isSettingsSidebar">
        <img width="19" height="19" :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
        <p class="ml-2">{{ crypto.title }}</p>
    </template>
    <template v-else>
        <!-- <button @click="setCurrentCryptoAndPush" class="flex flex-row">
            <img :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
        </button> -->
        <nuxt-link :to="crypto.path" class="flex flex-row">
            <img width="19" height="19" :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
            <p class="ml-2">{{ crypto.title }}</p>
        </nuxt-link>
    </template>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
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
    },
    methods: {
        ...mapMutations(["setCurrentCrypto"]),
        setCurrentCryptoAndPush(){
            this.setCurrentCrypto(this.crypto.title)
            this.$router.push({
                path: this.crypto.path
            })
        }
    }
}
</script>

<style>

</style>