<template>
    <div>
        <h1>Hello world on crypto : {{ cryptomonnaie.title }}!</h1>
        <img :src="cryptomonnaie.logo" :alt="'Le logo de la cryptomonnaie ' + cryptomonnaie.title">
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params}) {
        const cryptomonnaie = await $content("cryptomonnaies", params.slug).fetch();
        return { cryptomonnaie }
    }
}
</script>

<style>

</style>