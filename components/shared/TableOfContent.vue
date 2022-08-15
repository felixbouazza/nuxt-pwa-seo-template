<template>
    <ul v-if="this.toc.length" class="flex flex-col bg-gray-100 border rounded">
        <li class="text-gray-800 font-semibold">Sommaire</li>
        <li class="text-gray-500" v-for="t in toc" :key="t.id">
            <a :href="`#${t.id}`" :class="getClass(t.depth)">{{t.text}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        toc: {
            type: Object,
            required: true,
            default: []
        }
    },
    methods: {
        getClass(depth) {
            switch (depth) {
                case 2:
                    return 'hover:underline'
                case 3:
                    return 'ml-4 hover:underline'
                default:
                    return 'ml-8 hover:underline'
            }
        }
    }
}   
</script>