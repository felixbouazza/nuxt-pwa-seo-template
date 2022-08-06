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
        <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 xl:space-x-8">
            <a v-if="crypto.officialLink" class="bg-officialColor text-center text-white rounded py-2 px-5" target="_blank" :href="crypto.officialLink">Site officiel</a>
            <a v-if="crypto.twitterLink" class="bg-twitterColor text-center text-white rounded py-2 px-5" target="_blank" :href="crypto.twitterLink">Twitter</a>
            <a v-if="crypto.discordLink" class="bg-discordColor text-center text-white rounded py-2 px-5" target="_blank" :href="crypto.discordLink">Discord</a>
            <a v-if="crypto.mediumLink" class="bg-mediumColor text-center dark:text-black rounded py-2 px-5" target="_blank" :href="crypto.mediumLink">Medium</a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        logo() {
            if (this.$colorMode.preference == "light") return this.crypto.logo
            return this.crypto.darkLogo
        },
        smallLogo() {
            if (this.$colorMode.preference == "light") return this.crypto.navbarLogo
            return this.crypto.navbarDarkLogo
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