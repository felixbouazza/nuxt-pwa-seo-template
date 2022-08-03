<template>
    <div>
        <h1>Hello world on crypto : {{ crypto.title }}!</h1>
        <img :src="logo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
        <p>{{ crypto.description }}</p>
        <a target="_blank" :href="crypto.officialLink">Site Officiel</a>
        <a target="_blank" :href="crypto.twitterLink">Twitter</a>
        <a target="_blank" :href="crypto.discordLink">Discord</a>
        <a target="_blank" :href="crypto.mediumLink">Medium</a>
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