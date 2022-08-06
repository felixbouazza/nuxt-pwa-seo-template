<template>
    <div class="flex flex-col items-center justify-center space-y-6">
        <div class="flex flex-row items-center justify-center space-x-4 mt-4">
            <div class="flex">
                <img width="100" :src="logo" :alt="'Le logo de la cryptomonnaie ' + crypto.title" />       
            </div>
            <h1 class="text-5xl xl:text-7xl">{{ crypto.title }}</h1>
        </div>
        <div class="mx-auto w-5/6 xl:w-3/6 text-justify leading-relaxed flex flex-col justify-center items-center">
            <nuxt-content class="space-y-4" :document="crypto" />
        </div>
        <!-- <div>
            Courbe du prix du ATOM : en cours de construction
        </div> -->
        <div class="flex flex-row justify-center items-center space-x-4">
            <a v-if="crypto.officialLink" class="bg-officialColor text-center text-white rounded py-1 px-3 md:py-2 md:px-5" target="_blank" :href="crypto.officialLink">Site officiel</a>
            <a v-if="crypto.twitterLink" class="bg-twitterColor text-center text-white rounded py-1 px-3 md:py-2 md:px-5" target="_blank" :href="crypto.twitterLink">Twitter</a>
            <a v-if="crypto.discordLink" class="bg-discordColor text-center text-white rounded py-1 px-3 md:py-2 md:px-5" target="_blank" :href="crypto.discordLink">Discord</a>
            <a v-if="crypto.mediumLink" class="bg-mediumColor text-center text-white rounded py-1 px-3 md:py-2 md:px-5" target="_blank" :href="crypto.mediumLink">Medium</a>
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