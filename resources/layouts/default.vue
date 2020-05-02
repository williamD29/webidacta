<template>
    <div class="w-full flex bg-gray-50">
        <Sidebar class="flex-shrink-0" />
        <Navbar />
        <nuxt />
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
    }
}
</script>

<style lang="scss"></style>
