<template>
    <div class="w-64 bg-white h-screen border-r border-gray-200 px-2">
        <div class="flex h-16 w-full items-center px-2 text-2xl font-bold">
            Webidacta
        </div>
        <div class="mt-2 space-y-2">
            <nuxt-link
                to
                class="flex items-center font-medium px-2 py-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-800 focus:shadow-outline-purple transition duration-150 ease-in-out"
                ><i data-feather="home" height="20" width="20" class="mr-3"></i
                >Accueil</nuxt-link
            >
            <nuxt-link
                to
                class="flex items-center font-medium px-2 py-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-800 focus:shadow-outline-purple transition duration-150 ease-in-out"
                ><i
                    data-feather="folder"
                    height="20"
                    width="20"
                    class="mr-3"
                ></i
                >Gestionnaire</nuxt-link
            >
            <nuxt-link
                to
                class="flex items-center font-medium px-2 py-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-800 focus:shadow-outline-purple transition duration-150 ease-in-out"
                ><i data-feather="file" height="20" width="20" class="mr-3"></i
                >Fiches</nuxt-link
            >
            <nuxt-link
                to
                class="flex items-center font-medium px-2 py-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-800 focus:shadow-outline-purple transition duration-150 ease-in-out"
                ><i data-feather="user" height="20" width="20" class="mr-3"></i
                >Utilisateurs</nuxt-link
            >
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
