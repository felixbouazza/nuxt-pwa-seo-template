<template>
    <div :class="isDisplay">
        <div v-if="isSettingsSidebar" class="flex flex-row justify-between">
            <p>Documentation</p>
            <p>Activer</p>
        </div>
        <ul>
            <SidebarCrypto
            v-for="crypto in filteredCryptoList"
            :key="crypto.title"
            :crypto="crypto"
            />
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
      return {
        cryptoList: []
      }
    },
    computed: {
        ...mapState({
            isSettingsSidebar: (state) => state.isSettingsSidebar,
            cryptoListActive: (state) => state.cryptoListActive,
            cryptoSearch: (state) => state.cryptoSearch
        }),
        isDisplay() {
            if(this.cryptoSearch) {
                return ""
            }
            if (!this.cryptoListActive && !this.isSettingsSidebar) {
                return "hidden md:block";
            }
            if (this.isSettingsSidebar) return "px-2"
            return "";
        },
        filteredCryptoList() {
            if(!this.cryptoSearch) return this.cryptoList
            return this.cryptoList.filter((crypto) => {
                return crypto.title.toLowerCase().includes(this.cryptoSearch)
            })
        }
    },
    async fetch() {
        this.cryptoList = await this.$content("cryptomonnaies").fetch();
    },
}
</script>

<style>

</style>