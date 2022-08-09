<template>
  <a :class="bgColor" class="text-xs xl:text-normal text-center text-white dark:text-black rounded py-1 px-3 md:py-2 md:px-5" target="_blank" :href="link">{{ text }}</a>
</template>

<script>
export default {
    name: "SocialButton",
    props: {
        link: {
            type: String,
            required: true,
        },
        bgColor: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
}
</script>

<style>

</style>