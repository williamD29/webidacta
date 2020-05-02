<template>
    <div
        class="h-16 bg-white pr-8 border-b border-gray-200 shadow w-full flex items-center justify-between"
    >
        <div
            class="flex items-center px-4 lg:w-1/3 md:w-full h-full focus:shadow-outline-purple"
        >
            <i
                data-feather="search"
                height="20"
                width="20"
                class="text-gray-400 h-6 w-6"
            ></i>
            <input
                class="form-input h-full p-0 block pl-4 focus:shadow-none border-none w-full"
                placeholder="Rechercher"
            />
        </div>
        <div class="block flex-shrink-0">
            <div class="ml-4 flex items-center md:ml-6">
                <button
                    class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
                    aria-label="Notifications"
                >
                    <i data-feather="bell" class="h-6 w-6"></i>
                </button>

                <!-- Profile dropdown -->
                <div class="ml-3 relative">
                    <div>
                        <button
                            class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                            aria-label="User menu"
                            aria-haspopup="true"
                            @click.prevent="showDropdown"
                        >
                            <img
                                class="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </button>
                    </div>
                    <transition
                        enter-active-class="transition ease-out duration-100"
                        leave-active-class="transition ease-in duration-75"
                        enter-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                    >
                        <div
                            v-show="isDropdownOpened"
                            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                        >
                            <div
                                class="py-1 rounded-md bg-white shadow-xs"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
                                    role="menuitem"
                                    ><i
                                        data-feather="user"
                                        height="18"
                                        width="18"
                                        stroke-width="1.5"
                                        class="text-gray-700 mr-4 self-center"
                                    ></i
                                    >Mon profil</a
                                >
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
                                    role="menuitem"
                                    ><i
                                        data-feather="settings"
                                        height="18"
                                        width="18"
                                        stroke-width="1.5"
                                        class="text-gray-700 mr-4 self-center"
                                    ></i
                                    >Paramètres</a
                                >
                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-red-700 hover:bg-red-50 flex"
                                    role="menuitem"
                                    ><i
                                        data-feather="log-out"
                                        height="18"
                                        width="18"
                                        stroke-width="1.5"
                                        class="text-red-700 mr-4 self-center"
                                    ></i
                                    >Se déconnecter</a
                                >
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDropdownOpened: false
        }
    },
    methods: {
        showDropdown() {
            this.isDropdownOpened
                ? (this.isDropdownOpened = false)
                : (this.isDropdownOpened = true)
        }
    }
}
</script>

<style lang="scss" scoped></style>
