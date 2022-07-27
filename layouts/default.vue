<template>
    <div class="flex flex-col md:flex-row h-screen">
        <Sidebar class="w-full md:w-96 border bg-gray-200"/>
        <Nuxt class="bg-gray-100 dark:bg-gray-800 border minHeightContentMobile md:w-content"/>
    </div>
</template>

<script>
// export default {
//     async created() {
//         console.log(this)
//         let colorMode = await this.$localForage.getItem("colorMode")
//         if (!colorMode) {
//             this.$colorMode.preference = "light"
//             await this.$localForage.setItem("colorMode", "light")
//         } else {
//             this.$colorMode.preference = colorMode
//         }
//     },
// }
</script>

<style>

</style>