<template>
  <div class="flex flex-row py-1">
    <template v-if="isSettingsSidebar">
        <img width="19" height="19" :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
        <p class="ml-2">{{ crypto.title }}</p>
    </template>
    <template v-else>
        <nuxt-link :to="crypto.path" class="flex flex-row">
            <img width="19" height="19" :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
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
    },
}
</script>

<style>

</style>