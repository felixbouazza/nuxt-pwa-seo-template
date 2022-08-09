<template>
    <div :class="isDisplay">
        <div v-if="isSettingsSidebar" class="flex flex-row justify-between py-2">
            <p>Cryptomonnaies</p>
            <p>Favoris</p>
        </div>
        <template v-if="isSettingsSidebar">
            <SidebarCrypto
            v-for="crypto in filteredCryptoList"
            :key="crypto.id"
            :crypto="crypto"
            />
        </template>
        <template v-else>
            <ul>
                <SidebarCrypto
                v-for="crypto in filteredCryptoList['preferredCryptoList']"
                :key="crypto.id"
                :crypto="crypto"
                />
            </ul>
            <div class="flex flex-row">
                <SidebarCryptoArrow @toggle-sub-menu="toggleDisabledMenu"/>
                <p>Autres</p>
            </div>
            <ul class="pl-4" v-if="activeDisabledMenu">
                <SidebarCrypto
                v-for="crypto in filteredCryptoList['unpreferredCryptoList']"
                :key="crypto.id"
                :crypto="crypto"
                />
            </ul>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
      return {
        cryptoList: [],
        activeDisabledMenu: false
      }
    },
    computed: {
        ...mapState({
            isSettingsSidebar: (state) => state.isSettingsSidebar,
            cryptoListActive: (state) => state.cryptoListActive,
            cryptoSearch: (state) => state.cryptoSearch,
            preferredCryptoList: (state) => state.preferredCryptoList
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
            if (this.isSettingsSidebar) return this.cryptoList
            
            let filteredCryptoList = this.cryptoList
            if(this.cryptoSearch) {
                filteredCryptoList = filteredCryptoList.filter((crypto) => {
                    return crypto.title.toLowerCase().includes(this.cryptoSearch)
                })
            }

            let preferredCryptoList = []
            let unpreferredCryptoList = []
            filteredCryptoList.map((crypto) => {
                if(this.preferredCryptoList.includes(crypto.id)) {
                    preferredCryptoList.push(crypto)
                } else {
                    unpreferredCryptoList.push(crypto)
                }
            })
            return {
                preferredCryptoList,
                unpreferredCryptoList
            }
        }
    },
    methods: {
        async toggleDisabledMenu() {
            this.activeDisabledMenu = !this.activeDisabledMenu;
        },
    },
    async fetch() {
        this.cryptoList = await this.$content("cryptomonnaies").fetch();
    },
}
</script>

<style>

</style>