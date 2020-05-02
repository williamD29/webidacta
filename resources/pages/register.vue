<template>
    <div>
        <div id="webidacta-background" class="absolute h-full w-full z-0"></div>
        <div class="container mx-auto py-16 relative z-10">
            <RegisterForm class="mx-auto" />
        </div>
    </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
    layout: 'plain',
    components: {
        RegisterForm
    }
}
</script>

<style lang="scss" scoped>
#webidacta-background {
    background-image: url('../assets/images/webidacta-logo-background.svg');
    background-repeat: no-repeat;
    background-position: -100px -100px;
}
</style>
