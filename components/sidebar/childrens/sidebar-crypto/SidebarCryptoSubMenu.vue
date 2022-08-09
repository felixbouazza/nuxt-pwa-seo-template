<template>
    <ul class="space-y-2 pl-10 py-2">
        <li v-for="subMenu in cryptoSubMenu" :key="subMenu" class="flex flex-row">
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