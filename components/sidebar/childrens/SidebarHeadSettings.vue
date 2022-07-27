<template>
    <div class="flex flex-row items-center justify-around h-12 border-b border-gray-300">
        <button @click="switchNavbar" class="flex flex-row">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/>
            </svg>
            <p class="ml-1 font-bold">Back</p>
        </button>
        <div class="flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/>
            </svg>
            <p class="mr-5 ml-1">Dark</p>

            <label class="cursor-pointer">
                <div class="relative">
                    <input v-model="isLightMode" @click="switchColorMode" type="checkbox" class="sr-only cursor-pointer" />
                    <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div class="dot absolute w-6 h-6 bg-black rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
            </label>

            <p class="ml-5 mr-1">Light</p>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    computed: {
        isLightMode() {
            if (this.$colorMode.preference == "dark") return false
            return true
        }
    },
    methods: {
        ...mapMutations({
            switchNavbar: "switchNavbar",
        }),
        switchColorMode() {
            if (this.$colorMode.preference == "dark") {
                this.$colorMode.preference = "light"
            }
            else {
                this.$colorMode.preference = "dark"
            }
        }
    }
    
}
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #ffffff;
}
</style>