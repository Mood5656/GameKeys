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
    <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <NuxtLink to="/index1" class="flex items-center space-x-2" @click="isMobileMenuOpen = false">
                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                        </path>
                    </svg>
                    <span class="text-xl font-bold text-gray-900">GameKeys</span>
                </NuxtLink>

                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
                        class="text-gray-700 hover:text-indigo-600 transition-colors duration-200 relative group"
                        :class="{ 'text-indigo-600': $route.path === link.path }">
                        {{ link.title }}
                        <span v-if="$route.path === link.path"
                            class="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"></span>
                    </NuxtLink>
                </div>

                <div class="flex items-center space-x-3">
                    <SearchInput class="hidden sm:block" />
                    <CartIndicator />
                    <NuxtLink to="/account" class="p-1.5 text-gray-600 hover:text-indigo-600 sm:p-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </NuxtLink>

                    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="md:hidden p-1.5 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
                        </svg>
                    </button>
                </div>
            </div>

            <transition enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-screen" leave-from-class="opacity-100 max-h-screen"
                leave-to-class="opacity-0 max-h-0">
                <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-100 overflow-hidden">
                    <div class="px-4 py-3 sm:hidden">
                        <SearchInput />
                    </div>

                    <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
                        class="py-3 px-6 text-gray-700 hover:bg-indigo-50 transition-colors duration-200 flex items-center"
                        :class="{ 'text-indigo-600 bg-indigo-50': $route.path === link.path }"
                        @click="isMobileMenuOpen = false">
                        <span class="flex-grow">{{ link.title }}</span>
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </NuxtLink>
                </div>
            </transition>
        </div>
    </nav>
</template>