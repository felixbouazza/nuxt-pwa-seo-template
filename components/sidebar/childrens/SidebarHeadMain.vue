<template>
    <div class="flex flex-row justify-between px-3 py-2 h-12">
      <button @click="displayCryptoList" class="md:hidden">
        <svg class="fill-current dark:text-iconColorDark" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <div class="flex flex-row bg-white dark:bg-sidebarContentBackgroundDark px-2 py-1 rounded-md w-4/5">
        <svg class="fill-current dark:text-iconColorDark mr-2" width="24" height="24" viewBox="0 0 24 24">
          <path
            data-name="search-Filled"
            class="cls-1"
            d="m21.707 20.293-4.539-4.539a8.527 8.527 0 1 0-1.414 1.414l4.539 4.539a1 1 0 0 0 1.414-1.414ZM4 10.5a6.5 6.5 0 1 1 6.5 6.5A6.508 6.508 0 0 1 4 10.5Z"
          />
        </svg>
        <input
          v-model="cryptoSearch"
          @input="triggerSearch"
          class="dark:text-iconColorDark dark:bg-sidebarContentBackgroundDark outline-none"
          type="text"
          placeholder="Rechercher..."
        />
      </div>
      <button @click="switchNavbar">
        <svg class="fill-current dark:text-iconColorDark" width="24" height="24" viewBox="0 0 24 24">
          <path
            data-name="settings-Filled"
            d="M20.33 9.78h-.03a1.207 1.207 0 0 1-1.11-.75.01.01 0 0 0-.01-.01 1.218 1.218 0 0 1 .26-1.31l.03-.03a1.672 1.672 0 0 0 0-2.36l-.79-.78a1.672 1.672 0 0 0-2.36 0l-.01.02a1.233 1.233 0 0 1-1.33.25 1.192 1.192 0 0 1-.76-1.11v-.03A1.664 1.664 0 0 0 12.56 2h-1.12a1.664 1.664 0 0 0-1.66 1.67v.03a1.2 1.2 0 0 1-.75 1.11 1.149 1.149 0 0 1-.48.1 1.2 1.2 0 0 1-.85-.35l-.02-.02a1.672 1.672 0 0 0-2.36 0l-.79.78a1.672 1.672 0 0 0 0 2.36l.03.03a1.217 1.217 0 0 1-.86 2.07h-.03A1.673 1.673 0 0 0 2 11.45v1.11a1.673 1.673 0 0 0 1.67 1.67h.03a1.182 1.182 0 0 1 1.11.75 1.248 1.248 0 0 1-.25 1.33l-.02.01a1.684 1.684 0 0 0 0 2.37l.78.78a1.672 1.672 0 0 0 2.36 0l.02-.02a1.186 1.186 0 0 1 1.31-.26 1.214 1.214 0 0 1 .77 1.12v.03A1.656 1.656 0 0 0 11.44 22h1.12a1.656 1.656 0 0 0 1.66-1.66v-.03a1.214 1.214 0 0 1 .77-1.12 1.186 1.186 0 0 1 1.31.26l.02.02a1.672 1.672 0 0 0 2.36 0l.78-.78a1.684 1.684 0 0 0 0-2.37l-.02-.01a1.248 1.248 0 0 1-.25-1.33 1.182 1.182 0 0 1 1.11-.75h.03A1.673 1.673 0 0 0 22 12.56v-1.11a1.673 1.673 0 0 0-1.67-1.67ZM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z"
          />
        </svg>
      </button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
      return {
        cryptoSearch: null
      }
    },
    methods: {
        ...mapMutations({
          switchNavbar: "switchNavbar",
          displayCryptoList: "displayCryptoList",
          searchCrypto: "searchCrypto"
        }),
        triggerSearch() {
          this.searchCrypto(this.cryptoSearch.toLowerCase())
        }
    },
}
</script>

<style>

</style>