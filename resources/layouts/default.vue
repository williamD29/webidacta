<template>
    <div class="w-full flex bg-gray-50">
        <Sidebar class="h-screen" />
        <div class="flex flex-col flex-grow">
            <Navbar />
            <div class="container mx-auto">
                <nuxt />
            </div>
        </div>
    </div>
</template>

<script>
import feather from 'feather-icons'
import Sidebar from '@/components/core/Sidebar.vue'
import Navbar from '@/components/core/Navbar.vue'

export default {
    components: {
        Sidebar,
        Navbar
    },
    mounted() {
        feather.replace()
    },
    updated() {
        feather.replace()
    }
}
</script>

<style lang="scss"></style>
