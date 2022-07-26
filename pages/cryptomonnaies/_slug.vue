<template>
    <div>
        <h1>Hello world on crypto : {{ crypto.title }}!</h1>
        <img :src="crypto.logo" :alt="'Le logo de la cryptomonnaie ' + crypto.title">
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params, store}) {
        const crypto = await $content("cryptomonnaies", params.slug).fetch();
        store.commit("setCurrentCrypto", crypto.title)
        return { crypto }
    },
}
</script>

<style>

</style>