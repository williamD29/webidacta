<template>
    <div class="max-w-lg">
        <div
            class="flex justify-center h-16 items-center px-2 text-2xl font-bold"
        >
            <nuxt-link to>
                <img
                    src="@/assets/images/webidacta-logo.svg"
                    class="h-12 w-12"
                    alt="Logo Webidacta"
                />
            </nuxt-link>
        </div>
        <h2 class="text-center text-4xl font-bold mb-4">Inscription</h2>
        <div class="mb-8 text-center">
            Déjà inscrit ?
            <nuxt-link
                to="login"
                class="font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >Connectez-vous</nuxt-link
            >
        </div>
        <div class="sm:px-12 px-8 py-8 bg-white shadow-md rounded-lg w-auto">
            <form class="space-y-6" @submit.prevent="register">
                <div class="flex space-x-4">
                    <label class="block w-1/2">
                        <span class="text-cool-gray-700 font-medium"
                            >Prénom</span
                        >
                        <input
                            type="text"
                            class="form-input mt-1 block w-full focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out"
                        />
                        <div
                            v-if="formErrors.firstname"
                            class="text-red-600 text-sm mt-1"
                        >
                            {{ formErrors.firstname[0] }}
                        </div>
                    </label>
                    <label class="block w-1/2">
                        <span class="text-cool-gray-700 font-medium">Nom</span>
                        <input
                            type="text"
                            class="form-input mt-1 block w-full focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out"
                        />
                        <div
                            v-if="formErrors.name"
                            class="text-red-600 text-sm mt-1"
                        >
                            {{ formErrors.name[0] }}
                        </div>
                    </label>
                </div>
                <label class="block">
                    <span class="text-cool-gray-700 font-medium"
                        >Adresse email</span
                    >
                    <input
                        type="email"
                        class="form-input mt-1 block w-full focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out"
                    />
                    <div
                        v-if="formErrors.email"
                        class="text-red-600 text-sm mt-1"
                    >
                        {{ formErrors.email[0] }}
                    </div>
                </label>
                <label class="block">
                    <span class="text-cool-gray-700 font-medium"
                        >Mot de passe</span
                    >
                    <input
                        type="password"
                        class="form-input mt-1 block w-full focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out"
                    />
                    <div
                        v-if="formErrors.password"
                        class="text-red-600 text-sm mt-1"
                    >
                        {{ formErrors.password[0] }}
                    </div>
                </label>
                <label class="block">
                    <span class="text-cool-gray-700 font-medium"
                        >Confirmation du mot de passe</span
                    >
                    <input
                        type="password"
                        class="form-input mt-1 block w-full focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out"
                    />
                    <div
                        v-if="formErrors.password_confirmation"
                        class="text-red-600 text-sm mt-1"
                    >
                        {{ formErrors.password_confirmation[0] }}
                    </div>
                </label>
                <div></div>
                <button
                    type="submit"
                    class="flex w-full items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-purple-700 transition duration-150 ease-in-out"
                >
                    S'inscrire
                </button>
                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div
                                class="w-full border-t border-cool-gray-300"
                            ></div>
                        </div>
                        <div
                            class="relative flex justify-center text-sm leading-5"
                        >
                            <span class="px-2 bg-white text-cool-gray-500"
                                >Ou continuez avec</span
                            >
                        </div>
                    </div>

                    <div class="sm:px-2 px-0">
                        <div
                            class="mt-6 flex flex-wrap justify-between sm:-mx-4 -mx-2 -my-1"
                        >
                            <div class="sm:w-1/3 w-full px-2 sm:py-0 py-1">
                                <a
                                    href
                                    class="flex justify-center items-center text-center py-2 px-3 border border-cool-gray-300 rounded-md text-cool-gray-500 hover:border-cool-gray-400 focus:outline-none focus:border-cool-gray-400 sm:text-sm"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            fill="currentColor"
                                            d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div class="sm:w-1/3 w-full px-2 sm:py-0 py-1">
                                <a
                                    href
                                    class="flex justify-center items-center text-center py-2 px-3 border border-cool-gray-300 rounded-md text-cool-gray-500 hover:border-cool-gray-400 focus:outline-none focus:border-cool-gray-400 sm:text-sm"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            fill="currentColor"
                                            d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div class="sm:w-1/3 w-full px-2 sm:py-0 py-1">
                                <a
                                    href
                                    class="flex justify-center items-center text-center py-2 px-3 border border-cool-gray-300 rounded-md text-cool-gray-500 hover:border-cool-gray-400 focus:outline-none focus:border-cool-gray-400 sm:text-sm"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService.js'

export default {
    data() {
        return {
            formErrors: {}
        }
    },
    methods: {
        async register() {
            try {
                const response = await UserService.registerUser({
                    name: 'donval',
                    firstname: 'test__',
                    email: 'william.donval@gmail.com',
                    password: '123456789',
                    password_confirmation: '123456'
                })
                if (response.data.validationMessages) {
                    this.formErrors = {}
                    this.createValidationMessagesObject(
                        response.data.validationMessages
                    )
                }
            } catch (e) {}
        },
        createValidationMessagesObject(object) {
            for (const index in object) {
                if (this.formErrors[object[index].field]) {
                    this.formErrors[object[index].field].push(
                        object[index].message
                    )
                } else {
                    this.formErrors[object[index].field] = []
                    this.formErrors[object[index].field].push(
                        object[index].message
                    )
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
