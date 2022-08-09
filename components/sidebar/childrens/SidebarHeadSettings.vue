<template>
    <div class="flex flex-row items-center justify-around h-12">
        <button @click="switchNavbar" class="flex flex-row fill-current dark:text-iconColorDark">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/>
            </svg>
        </button>
        <button @click="goHome" class="flex flex-row fill-current dark:text-iconColorDark">
            <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path d="M21.8844 15.2984C21.7278 17.0315 21.476 18.4398 21.1697 19.6963C20.9655 20.9529 19.7403 22 18.4131 22H16.7795C15.8606 22 15.1459 21.267 15.1459 20.3246V16.0314C15.1459 14.9843 14.3291 14.1466 13.3081 14.1466H10.9598C9.93884 14.1466 9.12205 14.9843 9.12205 16.0314V20.3246C9.12205 21.267 8.40736 22 7.48847 22H5.54859C4.2213 22 3.09821 21.0576 2.79191 19.6963C2.48562 18.3351 2.22005 17.0327 2.07722 15.2984C1.89596 13.0974 2.07722 11.0052 2.17932 9.64398C2.17932 8.80628 2.68982 7.96859 3.40451 7.44503L10.5514 2.52356C10.9598 2.20942 11.4703 2 11.9808 2C12.4913 2 13.1039 2.20942 13.5123 2.52356L20.6592 7.44503C21.3739 7.96859 21.8844 8.80628 21.8844 9.64398C21.9865 11.0052 22.0831 13.0993 21.8844 15.2984Z"/>
            </svg>
        </button>
        <div class="flex items-center justify-center">
            <svg class="fill-current dark:text-iconColorDark" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/>
            </svg>
            <p class="mr-5 ml-1">Dark</p>

            <label class="cursor-pointer">
                <div class="relative">
                    <input v-model="isLightMode" type="checkbox" class="sr-only cursor-pointer" />
                    <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div class="dot absolute w-6 h-6 bg-black dark:bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
            </label>

            <p class="ml-5 mr-1">Light</p>
            <svg class="fill-current dark:text-iconColorDark" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    computed: {
        ...mapState(["cryptoListActive"]),
        isLightMode: {
            get() {
                if (this.$colorMode.preference == "dark") return false
                return true
            },
            async set() {
                if (this.$colorMode.preference == "dark") {
                    this.$colorMode.preference = "light"
                    await this.$localForage.settings.setItem("colorMode", "light")
                }
                else {
                    this.$colorMode.preference = "dark"
                    await this.$localForage.settings.setItem("colorMode", "dark")
                }
            }
        }
    },
    methods: {
        ...mapMutations(["switchNavbar", "displayCryptoList", "resetSearch"]),
        goHome() {
            if(this.cryptoListActive) {
                this.displayCryptoList()
            }
            this.switchNavbar();
            this.$router.push("/")
        }
    },
    async beforeDestroy() {
        this.resetSearch();
    }
}
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
}
</style>