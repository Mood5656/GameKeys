<script setup>
const route = useRoute()
const id = route.params.id
const { data: Games } = await useFetch(`https://6741ccdfe4647499008ecf09.mockapi.io/GameKeys/${id}`)

const { addToCart } = useCart()
</script>

<template>
    <main class="container mx-auto px-4 py-8 animate-fade-in">
        <div v-if="!Games" class="flex justify-center items-center h-96">
            <div class="animate-pulse flex flex-col items-center space-y-4">
                <div class="h-12 w-12 bg-indigo-200 rounded-full"></div>
                <div class="text-lg text-gray-600">Загрузка данных...</div>
            </div>
        </div>

        <transition enter-active-class="transition-opacity duration-500 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100">
            <div v-if="Games" class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/2 animate-fade-in-left">
                    <div
                        class="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                        <img :src="Games.image" :alt="Games.Title"
                            class="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                            loading="lazy">
                    </div>
                </div>
                <div class="md:w-1/2 space-y-6 animate-fade-in-right">
                    <div class="bg-white rounded-xl shadow-xl p-6 transition-all duration-300 hover:shadow-lg">
                        <div class="flex justify-between items-start">
                            <h1
                                class="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-indigo-600">
                                {{ Games.Title }}
                            </h1>
                            <div class="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
                                <span class="text-yellow-400">★</span>
                                <span class="font-semibold">{{ Games.rating }}</span>
                                <span class="text-gray-500 text-sm">({{ Games.reviews }}) отзывов</span>
                            </div>
                        </div>

                        <div class="mt-3 flex flex-wrap items-center gap-2 text-gray-600">
                            <span>Издатель: {{ Games.publisher }}</span>
                            <span class="text-gray-300">•</span>
                            <span>Разработчик: {{ Games.developer }}</span>
                        </div>

                        <div class="mt-6 space-y-6">
                            <div>
                                <h2 class="text-xl font-bold mb-2 text-gray-800 flex items-center">
                                    <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Описание
                                </h2>
                                <p class="text-gray-700 leading-relaxed">{{ Games.description }}</p>
                            </div>

                            <div>
                                <h2 class="text-xl font-bold mb-2 text-gray-800 flex items-center">
                                    <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    Дата выхода
                                </h2>
                                <p class="text-gray-700">{{ Games.Releasedate }}</p>
                            </div>

                            <div>
                                <h2 class="text-xl font-bold mb-2 text-gray-800 flex items-center">
                                    <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    Платформы
                                </h2>
                                <div class="flex flex-wrap gap-3">
                                    <span v-for="(platform, index) in Games.platform" :key="index" class="px-4 py-2 font-medium rounded-md
           bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-500/80 via-transparent to-purple-600/80
           text-black border border-white/10 shadow-lg
           hover:shadow-blue-500/20 transition-all">
                                        {{ platform }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-xl p-6 transition-all duration-500 hover:shadow-lg">
                        <div class="flex justify-between items-center mb-6">
                            <div>
                                <span class="text-2xl font-bold text-indigo-600">{{ Games.price }} ₽</span>
                            </div>
                        </div>

                        <button @click="addToCart(Games)"
                            class="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:from-indigo-700 hover:to-indigo-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Добавить в корзину
                        </button>

                        <div class="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Мгновенная доставка</span>

                            <span class="text-gray-300">•</span>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                </path>
                            </svg>
                            <span>Безопасная оплата</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </main>
</template>