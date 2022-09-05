<template>
    <div class="flex flex-col">
        <div class="flex flex-row justify-between items-center">
            <li class="flex w-full px-2">
                <SidebarCryptoArrow @toggle-sub-menu="toggleCryptoSubMenu" v-if="!isSettingsSidebar && oneExist"/>
                <SidebarCryptoLabel :crypto="crypto"/>
            </li>
            <div v-if="isSettingsSidebar">
              <input v-model="preferredCrypto" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            </div>
        </div>
        <SidebarCryptoSubMenu v-if="subMenuIsActive" />
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            subMenuIsActive: false,
            oneExist: false
        };
    },
    props: {
        crypto: {
            type: Object,
            required: true,
        },
    },
    computed: {
      ...mapState({
        currentCrypto: (state) => state.currentCrypto,
        isSettingsSidebar: (state) => state.isSettingsSidebar,
        preferredCryptoList: (state) => state.preferredCryptoList
      }),
      ...mapGetters(["isPreferredCrypto"]),
    //   isCurrentCrypto() {
    //     return this.currentCrypto == this.crypto.id && !this.isSettingsSidebar ? "bg-blue-500" : ""
    //   },
      preferredCrypto: {
        get() {
            if(this.isPreferredCrypto(this.crypto.id)) return true
            return false
        },
        async set() {
            if (this.isPreferredCrypto(this.crypto.id)) {
                var preferreds = this.preferredCryptoList.slice();
                preferreds = preferreds.filter((crypto) => {
                    return crypto !== this.crypto.id
                })
                this.updatePreferredCryptoList(preferreds)
                await this.$localforage.data.setItem("preferredCryptoList", preferreds)
            }
            else {
                var preferreds = this.preferredCryptoList.slice();
                preferreds.push(this.crypto.id)
                this.updatePreferredCryptoList(preferreds)
                await this.$localforage.data.setItem("preferredCryptoList", preferreds)
            }
        }
      }
    },
    methods: {
        ...mapMutations(["updatePreferredCryptoList"]),
        async toggleCryptoSubMenu() {
            this.subMenuIsActive = !this.subMenuIsActive;
        },
    },
    async fetch({ $content }) {
        const haveActuality = (await $content('actualites').only([]).fetch()).length
        const haveGouvernance = (await $content('gouvernances').only([]).fetch()).length
        const haveAirdrop = (await $content('airdrops').only([]).fetch()).length
        const haveStaking = (await $content('staking').only([]).fetch()).length
        if (haveActuality || haveGouvernance || haveAirdrop || haveStaking) {
            this.oneExist = true
        }
    },
};
</script>

<style>
</style>