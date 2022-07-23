<template>
    <div class="flex flex-col">
        <li class="flex">
            <button @click="toggleCryptoSubMenu">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M16 12l-6 6V6z"/>
                </svg>
            </button>
            <img :src="crypto.logo" width="20">
            &nbsp;{{ crypto.title }}
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