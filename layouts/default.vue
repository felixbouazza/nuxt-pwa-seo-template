<template>
    <div class="flex flex-col md:flex-row h-screen dark:text-gray-300">
        <Sidebar class="w-full md:w-96"/>
        <Nuxt :class="isDisplay" class="md:w-content dark:bg-contentBackgroundDark contentminheight"/>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    async mounted() {
        const colorMode = await this.$localforage.settings.getItem("colorMode")
        if(!colorMode) {
            await this.$localforage.settings.setItem("colorMode", "light")
            this.$colorMode.preference = "light"
            return
        }
        this.$colorMode.preference = colorMode
    },
    computed: {
        ...mapState({
            isSettingsSidebar: (state) => state.isSettingsSidebar,
        }),
        isDisplay() {
            if(this.isSettingsSidebar) {
                return "hidden md:block"
            }
            return ""
        }
    }
}
</script>

<style>

</style>