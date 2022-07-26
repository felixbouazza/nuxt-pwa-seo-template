<template>
    <div class="flex flex-col">
        <div class="flex flex-row justify-between items-center">
            <li class="flex w-full" :class="isCurrentCrypto">
                <SidebarArrow @toggle-sub-menu="toggleCryptoSubMenu" />
                <SidebarCryptoLabel :crypto="crypto" :isPreference="isPreference" />
            </li>
            <div v-if="isPreference">
              <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            </div>
        </div>
        <SidebarCryptoSubMenu v-if="subMenuIsActive" :isPreference="isPreference"/>
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
        isPreference: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
      ...mapState({
        currentCrypto: (state) => state.currentCrypto
      }),
      isCurrentCrypto() {
        return this.currentCrypto == this.crypto.title && !this.isPreference ? "bg-blue-500" : ""
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