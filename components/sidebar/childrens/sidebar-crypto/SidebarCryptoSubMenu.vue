<template>
    <ul class="space-y-2 pl-14 py-2">
        <li v-for="subMenu in cryptoSubMenu" :key="subMenu" class="flex flex-row justify-between items-center">
            <span>{{ subMenu }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            cryptoSubMenu: ["Actualités", "Gouvernances", "Airdrops", "Staking"],
        }
    }
}
</script>

<style>

</style>