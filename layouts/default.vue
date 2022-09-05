<template>
    <div class="flex flex-col md:flex-row h-screen dark:text-gray-300">
        <Sidebar/>
        <Nuxt :class="isDisplay" class="dark:bg-contentBackgroundDark py-10 md:w-2/3 lg:w-4/6 xl:w-4/5 md:absolute md:top-0 md:right-0 md:min-h-full"/>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
    async created() {
        const colorMode = await this.$localforage.settings.getItem("colorMode")
        if(!colorMode) {
            await this.$localforage.settings.setItem("colorMode", "light")
            this.$colorMode.preference = "light"
        } else {
            this.$colorMode.preference = colorMode
        }
        
        const preferredCryptoList = await this.$localforage.data.getItem("preferredCryptoList")
        if(preferredCryptoList) {
            if(preferredCryptoList.length) {
                this.updatePreferredCryptoList(preferredCryptoList)
            }
        }
    },
    methods: {
        ...mapMutations(["updatePreferredCryptoList"])
    },
    computed: {
        ...mapState({
            isSettingsSidebar: (state) => state.isSettingsSidebar,
            preferredCryptoList: (state) => state.preferredCryptoList
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

</style>/