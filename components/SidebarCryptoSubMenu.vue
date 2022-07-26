<template>
    <ul class="space-y-2 pl-14 py-2">
        <li v-for="subMenu in cryptoSubMenu" :key="subMenu" class="flex flex-row justify-between items-center">
            <span>{{ subMenu }}</span>
            <div v-if="isPreference">
                <input type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        isPreference: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            cryptoSubMenu: ["Actualités", "Gouvernances", "Airdrops", "Staking"],
        }
    }
}
</script>

<style>

</style>