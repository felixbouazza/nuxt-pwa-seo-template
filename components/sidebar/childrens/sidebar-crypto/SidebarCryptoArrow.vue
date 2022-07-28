<template>
    <button @click="toggleSubMenu">
        <svg class="fill-current dark:text-iconColorDark" width="24" height="24" viewBox="0 0 24 24">
            <template v-if="subMenuIsActive">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M12 16l-6-6h12z"/>
            </template>
            <template v-else>
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M16 12l-6 6V6z"/>
            </template>
        </svg>
    </button>  
</template>

<script>
export default {
    data() {
        return {
            subMenuIsActive: false,
        }
    },
    methods: {
        async toggleSubMenu() {
            this.subMenuIsActive = !this.subMenuIsActive
            this.$emit("toggle-sub-menu")
        }
    }
}
</script>
