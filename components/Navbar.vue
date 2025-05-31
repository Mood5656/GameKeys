<script setup>
const links = [
    { title: 'Главная', path: '/index1' },
    { title: 'Каталог', path: '/catalog' },
    { title: 'Новинки', path: '/promotions' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Чат', path: '/chat' }
]

const isMobileMenuOpen = ref(false)
</script>

<template>
    <nav class="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 hover:shadow-md">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <NuxtLink to="/index1"
                    class="flex items-center space-x-2 transform transition-all duration-300 hover:scale-105">
                    <svg class="w-8 h-8 text-indigo-600 transition-transform duration-500 hover:rotate-12" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                        </path>
                    </svg>
                    <span
                        class="text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-indigo-600">GameKeys</span>
                </NuxtLink>

                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
                        class="text-gray-700 hover:text-indigo-600 transition-all duration-300 relative group"
                        :class="{ 'text-indigo-600': $route.path === link.path }">
                        {{ link.title }}
                        <span v-if="$route.path === link.path"
                            class="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full transition-all duration-300 group-hover:scale-x-105"></span>
                        <span v-else
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </NuxtLink>
                </div>

                <div class="flex items-center space-x-4">
                    <SearchInput />
                    <CartIndicator />
                    <NuxtLink to="/"
                        class="p-2 text-gray-600 hover:text-indigo-600 transform transition-all duration-200 hover:scale-110">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </NuxtLink>

                    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="md:hidden p-2 text-gray-600 hover:text-indigo-600 transform transition-all duration-200 active:scale-95">
                        <svg class="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
                        </svg>
                    </button>
                </div>
            </div>

            <transition enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96" leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0">
                <div v-show="isMobileMenuOpen"
                    class="md:hidden bg-white py-2 px-4 shadow-lg rounded-b-lg overflow-hidden">
                    <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
                        class="block py-2 px-2 text-gray-700 hover:bg-gray-100 rounded transition-all duration-200 hover:pl-3 hover:font-medium"
                        :class="{ 'text-indigo-600 font-medium': $route.path === link.path }"
                        @click="isMobileMenuOpen = false">
                        {{ link.title }}
                    </NuxtLink>
                </div>
            </transition>
        </div>
    </nav>
</template>
