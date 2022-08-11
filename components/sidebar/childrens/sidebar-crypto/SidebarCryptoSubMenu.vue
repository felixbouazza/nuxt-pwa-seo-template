<template>
    <ul v-if="oneExist" class="space-y-2 pl-10 py-2">
        <li v-if="haveActuality" class="flex flex-row">
            <span>Actualités</span>
        </li>
        <li v-if="haveGouvernance" class="flex flex-row">
            <span>Gouvernances</span>
        </li>
        <li v-if="haveStaking" class="flex flex-row">
            <span>Staking</span>
        </li>
        <li v-if="haveAirdrop" class="flex flex-row">
            <span>Airdrops</span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            haveActuality: false,
            haveGouvernance: false,
            haveAirdrop: false,
            haveStaking: false,
            oneExist: false
        }
    },
    async fetch() {
        this.haveActuality = (await $content('actualites').only([]).fetch()).length
        this.haveGouvernance = (await $content('gouvernances').only([]).fetch()).length
        this.haveAirdrop = (await $content('airdrops').only([]).fetch()).length
        this.haveStaking = (await $content('staking').only([]).fetch()).length
        if (this.haveActuality || this.haveGouvernance || this.haveAirdrop || this.haveStaking) {
            this.oneExist = true
        }
    },
}
</script>