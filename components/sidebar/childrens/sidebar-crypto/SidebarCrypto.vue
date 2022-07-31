<template>
    <div class="flex flex-col">
        <div class="flex flex-row justify-between items-center">
            <li class="flex w-full" :class="isCurrentCrypto">
                <SidebarCryptoArrow @toggle-sub-menu="toggleCryptoSubMenu" v-if="!isSettingsSidebar"/>
                <SidebarCryptoLabel :crypto="crypto"/>
            </li>
            <div v-if="isSettingsSidebar">
              <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            </div>
        </div>
        <SidebarCryptoSubMenu v-if="subMenuIsActive" />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            subMenuIsActive: false,
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
        isSettingsSidebar: (state) => state.isSettingsSidebar
      }),
      isCurrentCrypto() {
        return this.currentCrypto == this.crypto.title && !this.isSettingsSidebar ? "bg-blue-500" : ""
      }
    },
    methods: {
        async toggleCryptoSubMenu() {
            this.subMenuIsActive = !this.subMenuIsActive;
        },
    },
};
</script>

<style>
</style>