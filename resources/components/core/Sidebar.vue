<template>
    <div>
        <button
            v-show="!isSidebarOpen"
            class="lg:hidden inline-flex sm:w-16 h-16 w-14 text-cool-gray-800 items-center text-cool-gray-800 absolute sm:p-5 px-4 py-5 z-0 border-b border-cool-gray-200 focus:outline-none focus:shadow-outline-purple bg-white hover:bg-cool-gray-100 transition duration-150 ease-in-out"
            @click.prevent="isSidebarOpen = !isSidebarOpen"
        >
            <i data-feather="menu" class="h-6 w-6"></i>
        </button>
        <transition
            enter-active-class="transition ease-out duration-300"
            leave-active-class="transition ease-in duration-300"
            enter-class="transform opacity-0 -translate-x-full"
            enter-to-class="transform opacity-100 translate-x-0"
            leave-class="transform opacity-100 translate-x-0"
            leave-to-class="transform opacity-0 -translate-x-full"
        >
            <div
                v-show="isSidebarOpen"
                :class="[isSidebarOpen ? 'flex' : '']"
                class="w-64 bg-white h-screen lg:relative lg:flex fixed top-0 border-r border-cool-gray-200 px-2 flex flex-col z-20"
            >
                <div class="flex justify-between -mx-2 pl-2">
                    <nuxt-link to class="flex h-16 items-center px-2 text-2xl font-bold">
                        <div class="flex">
                            <img src="@/assets/images/webidacta-logo.svg" class="h-9 w-9 mr-3" alt />
                            <h2>Webidacta</h2>
                        </div>
                    </nuxt-link>
                    <button
                        v-show="isSidebarOpen"
                        class="lg:hidden inline-flex w-16 h-16 text-cool-gray-800 items-center text-cool-gray-800 relative p-5 z-0 focus:outline-none focus:shadow-outline-purple bg-white hover:bg-cool-gray-100 transition duration-150 ease-in-out"
                        @click.prevent="isSidebarOpen = !isSidebarOpen"
                    >
                        <i data-feather="x" class="h-6 w-6"></i>
                    </button>
                </div>
                <div class="flex flex-col justify-between flex-grow">
                    <div class="mt-2 space-y-2 flex-grow">
                        <nuxt-link
                            to
                            class="flex items-center font-medium p-2 rounded-md hover:bg-cool-gray-100 text-cool-gray-500 hover:text-cool-gray-800 focus:outline-none focus:shadow-outline-purple transition duration-150 ease-in-out"
                        >
                            <i data-feather="home" height="20" width="20" class="mr-3"></i>Accueil
                        </nuxt-link>
                        <nuxt-link
                            to
                            class="flex items-center font-medium p-2 rounded-md hover:bg-cool-gray-100 text-cool-gray-500 hover:text-cool-gray-800 focus:outline-none focus:shadow-outline-purple transition duration-150 ease-in-out"
                        >
                            <i data-feather="folder" height="20" width="20" class="mr-3"></i>Gestionnaire
                        </nuxt-link>
                        <nuxt-link
                            to
                            class="flex items-center font-medium p-2 rounded-md hover:bg-cool-gray-100 text-cool-gray-500 hover:text-cool-gray-800 focus:outline-none focus:shadow-outline-purple transition duration-150 ease-in-out"
                        >
                            <i data-feather="file" height="20" width="20" class="mr-3"></i>Fiches
                        </nuxt-link>
                        <div :class="[isLinkOpen ? 'bg-cool-gray-100' : '']" class="rounded-md">
                            <button
                                :class="[isLinkOpen ? 'text-cool-gray-800' : '']"
                                class="flex items-center font-medium p-2 rounded-md hover:bg-cool-gray-100 w-full text-cool-gray-500 hover:text-cool-gray-800 focus:outline-none focus:shadow-outline-purple transition duration-150 ease-in-out"
                                @click.prevent="isLinkOpen = !isLinkOpen"
                            >
                                <i data-feather="user" height="20" width="20" class="mr-3"></i>
                                <div class="flex justify-between items-center w-full">
                                    Utilisateurs
                                    <i
                                        data-feather="chevron-down"
                                        height="16"
                                        width="16"
                                    ></i>
                                </div>
                            </button>
                            <transition
                                enter-active-class="transition ease-out duration-100"
                                leave-active-class="transition ease-in duration-75"
                                enter-class="transform opacity-0 -translate-y-1/3"
                                enter-to-class="transform opacity-100 translate-y-0"
                                leave-class="transform opacity-100 translate-y-0"
                                leave-to-class="transform opacity-0 -translate-y-1/3"
                            >
                                <div
                                    v-show="isLinkOpen"
                                    class="text-sm flex flex-col p-2 font-medium relative"
                                >
                                    <nuxt-link
                                        to
                                        class="my-1 p-2 pl-8 text-cool-gray-500 hover:text-cool-gray-800 hover:bg-cool-gray-200 rounded-md focus:outline-none focus:shadow-outline-purple"
                                    >Créer un élève</nuxt-link>
                                    <nuxt-link
                                        to
                                        class="my-1 p-2 pl-8 text-cool-gray-500 hover:text-cool-gray-800 hover:bg-cool-gray-200 rounded-md focus:outline-none focus:shadow-outline-purple"
                                    >Créer un professeur</nuxt-link>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div
                        class="mb-4 space-y-2 text-cool-gray-500 font-medium flex flex-col px-2 text-sm"
                    >
                        <label class="uppercase text-cool-gray-400">Général</label>
                        <nuxt-link to>À propos</nuxt-link>
                        <nuxt-link to>Aide</nuxt-link>
                        <nuxt-link to>Conditions d'utilisations</nuxt-link>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
	data() {
		return {
			isLinkOpen: false,
			isSidebarOpen: true
		}
	},
	mounted() {
		if (window.innerWidth >= 1024) {
			this.isSidebarOpen = true
		} else {
			this.isSidebarOpen = false
		}
		window.addEventListener('resize', () => {
			this.handleResize()
		})
	},
	updated() {
		window.addEventListener('resize', () => {
			this.handleResize()
		})
	},
	beforeDestroy() {
		window.removeEventListener('resize', () => {
			this.handleResize()
		})
	},
	methods: {
		handleResize() {
			if (window.innerWidth >= 1024) {
				this.isSidebarOpen = true
			} else {
				this.isSidebarOpen = false
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
