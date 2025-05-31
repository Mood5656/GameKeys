<script setup>
const { data: Games } = await useFetch("https://6741ccdfe4647499008ecf09.mockapi.io/GameKeys", {
    query: {
        page: 3,
        limit: 6
    }
})
const { addToCart } = useCart()
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <section
            class="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-24 transform transition-all duration-500 hover:shadow-2xl">
            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-3xl">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 hover:scale-105">Новинки
                        и акции</h1>
                    <p class="text-xl md:text-2xl mb-8 transition-opacity duration-300 hover:opacity-90">Самые свежие
                        игры и выгодные предложения</p>
                    <div class="flex flex-wrap gap-3">
                        <span
                            class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105">Скидки
                            до 70%</span>
                        <span
                            class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105">Новые
                            релизы</span>
                        <span
                            class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105">Специальные
                            предложения</span>
                    </div>
                </div>
            </div>
            <div class="absolute inset-0 overflow-hidden transition-all duration-500 hover:opacity-90">
                <div class="absolute inset-0 bg-black/30 transition-all duration-500 hover:bg-black/20"></div>
                <img src="/assets/2150165489.jpg" alt="Акции"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105">
            </div>
        </section>

        <div class="container mx-auto px-4 py-12">
            <section class="mb-16">
                <div class="flex items-center justify-between mb-8">
                    <h2 class="text-3xl font-bold transition-colors duration-300 hover:text-indigo-600">Новые релизы
                    </h2>
                    <NuxtLink to="/index1"
                        class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center group transition-all duration-300">
                        Все новинки
                        <svg class="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </NuxtLink>
                </div>

                <transition-group name="list" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    enter-active-class="transition-all duration-500 ease-out"
                    leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 translate-y-8"
                    enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-8" move-class="transition-all duration-500 ease-in-out">
                    <ProductCard v-for="product in Games" :key="product.id" :product="product" badge="Новинка"
                        @add-to-cart="addToCart(product)"
                        class="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl" />
                </transition-group>
            </section>

            <section class="mb-16">
                <div class="flex items-center justify-between mb-8">
                    <h2 class="text-3xl font-bold transition-colors duration-300 hover:text-indigo-600">Горячие акции
                    </h2>
                    <NuxtLink to="/catalog?discount=true"
                        class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center group transition-all duration-300">
                        Все акции
                        <svg class="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </NuxtLink>
                </div>

                <transition-group name="list" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    enter-active-class="transition-all duration-500 ease-out"
                    leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 translate-y-8"
                    enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-8" move-class="transition-all duration-500 ease-in-out">
                    <ProductCard v-for="product in Games" :key="product.id" :product="product" badge="Акция"
                        @add-to-cart="addToCart(product)"
                        class="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl" />
                </transition-group>
            </section>

            <section>
                <h2 class="text-3xl font-bold mb-8 transition-colors duration-300 hover:text-indigo-600">Специальные
                    предложения</h2>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div
                        class="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                        <div class="p-6 md:p-8 text-white">
                            <div class="flex items-center mb-4">
                                <span
                                    class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105">Ограниченное
                                    время</span>
                            </div>
                            <h3
                                class="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 hover:scale-[1.01]">
                                Коллекция игр от Ubisoft</h3>
                            <p class="mb-6 text-amber-100 transition-opacity duration-300 hover:opacity-90">Скидки до
                                60% на лучшие игры издателя. Только до конца месяца!</p>
                            <NuxtLink to=""
                                class="inline-flex items-center bg-white text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md active:scale-95">
                                Посмотреть коллекцию
                                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span>К сожалению предложение закончилось :(</span>
                            </NuxtLink>
                        </div>
                    </div>

                    <div
                        class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                        <div class="p-6 md:p-8 text-white">
                            <div class="flex items-center mb-4">
                                <span
                                    class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105">Эксклюзив</span>
                            </div>
                            <h3
                                class="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 hover:scale-[1.01]">
                                Пакет "Игровой старт"</h3>
                            <p class="mb-6 text-blue-100 transition-opacity duration-300 hover:opacity-90">5 популярных
                                игр по специальной цене. Экономия 45%!</p>
                            <NuxtLink to="/index1"
                                class="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md active:scale-95">
                                Купить пакет
                                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span>К сожалению предложение закончилось :(</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <div class="p-6 md:p-8 text-white flex flex-col md:flex-row items-center">
                        <div class="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                            <h3
                                class="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 hover:scale-[1.01]">
                                Подписка GameKeys Pro</h3>
                            <p class="mb-6 text-purple-100 transition-opacity duration-300 hover:opacity-90">Получайте 3
                                случайных игровых ключа каждый месяц + эксклюзивные скидки!</p>
                            <NuxtLink to="/index1"
                                class="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md active:scale-95">
                                Подробнее о подписке
                                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span>К сожалению предложение закончилось :(</span>
                            </NuxtLink>
                        </div>
                        <div class="md:w-1/3 flex justify-center">
                            <div
                                class="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-500 hover:scale-110 hover:bg-white/30">
                                <div class="text-4xl font-bold mb-1">-15%</div>
                                <div class="text-sm">для подписчиков</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
