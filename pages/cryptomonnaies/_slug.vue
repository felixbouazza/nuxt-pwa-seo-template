<template>
    <div class="flex flex-col items-center space-y-6">
        <div class="flex flex-row items-center justify-center space-x-4 mt-4">
            <div class="flex">
                <img width="100" :src="logo" :alt="'Le logo de la cryptomonnaie ' + crypto.title" />       
            </div>
            <h1 class="text-7xl">{{ crypto.title }}</h1>
        </div>
        <p class="border border-gray-300 p-5">
            {{ crypto.description }}
        </p>
        <div>
            EN ATTENTE DE CONCEPTION
        </div>
        <div class="flex flex-col space-y-6">
            <div class="flex flex-row border border-gray-200 py-2 px-6">
                <div class="flex">
                </div>
                <a target="_blank" :href="crypto.officialLink">Site Officiel</a>
            </div>
            <div class="flex flex-row border border-gray-200 py-2 px-6">
                <div class="flex">
                </div>
                <a target="_blank" :href="crypto.twitterLink">Twitter</a>
            </div>
            <div class="flex flex-row border border-gray-200 py-2 px-6">
                <div class="flex">
                </div>
                <a target="_blank" :href="crypto.discordLink">Discord</a>
            </div>
            <div class="flex flex-row border border-gray-200 py-2 px-6">
                <div class="flex">
                </div>
                <a target="_blank" :href="crypto.mediumLink">Medium</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        logo() {
            if (this.$colorMode.preference == "light") return this.crypto.logo
            return this.crypto.darkLogo
        }
        
    },
    async asyncData({ $content, params, store}) {
        const crypto = await $content("cryptomonnaies", params.slug).fetch();
        store.commit("setCurrentCrypto", crypto.id)
        return { crypto }
    },
}
</script>

<style>

</style>