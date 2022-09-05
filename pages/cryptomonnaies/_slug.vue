<template>
    <div class="flex flex-col items-center space-y-6">
        <div class="flex flex-row items-center justify-center space-x-4 mt-4">
            <div class="flex">
                <img width="100" :src="logo" :alt="'Le logo de la cryptomonnaie ' + crypto.title" />       
            </div>
            <h1 class="text-5xl xl:text-7xl">{{ crypto.title }}</h1>
        </div>
        <SharedTableOfContent :toc="crypto.toc"/> 
        <nuxt-content class="text-justify leading-loose mx-auto space-y-4 prose lg:prose-lg dark:text-white px-4 md:px-0" :document="crypto" />
        <div class="flex flex-row justify-center space-x-4 md:space-x-6 xl:space-x-8">
            <SharedSocialButton v-if="crypto.officialLink" :link="crypto.officialLink" :bgColor="'bg-red-700'" :text="'Site officiel'"/>
            <SharedSocialButton v-if="crypto.twitterLink" :link="crypto.twitterLink" :bgColor="'bg-twitterColor'" :text="'Twitter'"/>
            <SharedSocialButton v-if="crypto.discordLink" :link="crypto.discordLink" :bgColor="'bg-discordColor'" :text="'Discord'"/>
            <SharedSocialButton v-if="crypto.mediumLink" :link="crypto.mediumLink" :bgColor="'bg-mediumColor'" :text="'Medium'"/>
        </div>
    </div>
</template>

<script>
import TableOfContent from '../../components/shared/TableOfContent.vue'
export default {
    computed: {
        logo() {
            if (this.$colorMode.preference == "light")
                return this.crypto.logo;
            return this.crypto.darkLogo;
        },
        smallLogo() {
            if (this.$colorMode.preference == "light")
                return this.crypto.navbarLogo;
            return this.crypto.navbarDarkLogo;
        }
    },
    async asyncData({ $content, params, store }) {
        const crypto = await $content("cryptomonnaies", params.slug).fetch();
        store.commit("setCurrentCrypto", crypto.id);
        console.log(crypto.toc);
        return { crypto };
    },
    components: { TableOfContent }
}
</script>