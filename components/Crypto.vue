<template>
    <div class="flex flex-col">
        <li class="flex">
            <button @click="toggleCryptoSubMenu">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <template v-if="cryptoSubMenuIsActive">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M12 16l-6-6h12z"/>
                    </template>
                    <template v-else>
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/>
                    </template>
                </svg>
            </button>
            <nuxt-link :to="crypto.path" class="flex flex-row w-full hover:bg-gray-300">
                <img :src="crypto.navbarLogo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
            </nuxt-link>
        </li>
        <ul v-if="cryptoSubMenuIsActive">
            <li v-for="subMenu in cryptoSubMenu" :key="subMenu">
                {{ subMenu }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
            cryptoSubMenu: ["Actualités", "Gouvernances", "Airdrops", "Staking"],
            cryptoSubMenuIsActive: false,
        }
    },
    props: {
        crypto: {
            type: Object,
            required: true,
        }
    },
    methods: {
        async toggleCryptoSubMenu() {
            this.cryptoSubMenuIsActive = !this.cryptoSubMenuIsActive
        }
    },
}
</script>

<style>

</style>