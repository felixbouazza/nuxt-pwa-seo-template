<template>
  <div>
    <template v-if="isSettingsSidebar">
        <img :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
    </template>
    <template v-else>
        <!-- <button @click="setCurrentCryptoAndPush" class="flex flex-row">
            <img :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
        </button> -->
        <nuxt-link :to="crypto.path" class="flex flex-row">
            <img :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
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