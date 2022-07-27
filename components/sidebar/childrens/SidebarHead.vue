<template>
    <div>
        <SidebarHeadMain v-if="!isSettingsSidebar"/>
        <SidebarHeadSettings v-else/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            isSettingsSidebar: (state) => state.isSettingsSidebar
        }),
    },
}
</script>

<style>

</style>