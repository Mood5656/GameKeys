<script setup>

const { data: Games } = await useFetch("https://6741ccdfe4647499008ecf09.mockapi.io/GameKeys", {
    query: {
        page: 1,
        limit: 8
    }
})

const { addToCart } = useCart()

console.log(data)
</script>

<template>
    <div>
        <section class="bg-indigo-700 text-white py-16 transform transition-all duration-500 hover:shadow-xl">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105">
                    Игровые ключи по лучшим ценам
                </h1>
                <p class="text-xl mb-8 max-w-2xl mx-auto transition-opacity duration-300 hover:opacity-90">
                    Купить лицензионные ключи для Steam, Xbox, PlayStation, Epic Games и других платформ
                </p>
                <NuxtLink to="/catalog"
                    class="bg-white text-indigo-700 font-bold px-6 py-3 rounded-md hover:bg-gray-100 
                    transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md active:scale-95 inline-block">
                    В каталог
                </NuxtLink>
            </div>
        </section>

        <section class="py-12">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-8 text-center transition-all duration-300 hover:text-indigo-600">
                    Популярные игры
                </h2>

                <transition-group name="list" tag="div"
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    enter-active-class="transition-all duration-500 ease-out"
                    leave-active-class="transition-all duration-300 ease-in" enter-from-class="opacity-0 translate-y-8"
                    enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-8" move-class="transition-all duration-500 ease-in-out">
                    <ProductCard v-for="product in Games" :key="product.id" :product="product"
                        @add-to-cart="addToCart(product)"
                        class="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl" />
                </transition-group>

                <div class="text-center mt-8">
                    <NuxtLink to="/catalog"
                        class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300 inline-flex items-center group">
                        Смотреть все товары
                        <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section class="bg-gray-100 py-12 transform transition-all duration-500 hover:shadow-inner">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-12 text-center transition-all duration-300 hover:text-indigo-600">
                    Почему выбирают нас
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md">
                        <div class="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
                                  transition-all duration-300 transform hover:scale-110 hover:bg-indigo-200">
                            <svg class="w-8 h-8 text-indigo-600 transition-transform duration-300 hover:rotate-12"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-2 transition-colors duration-300 hover:text-indigo-600">100%
                            лицензионные ключи</h3>
                        <p class="text-gray-600 transition-opacity duration-300 hover:opacity-90">Все ключи
                            приобретаются напрямую у издателей и официальных дистрибьюторов</p>
                    </div>

                    <div class="text-center p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md">
                        <div class="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
                                  transition-all duration-300 transform hover:scale-110 hover:bg-indigo-200">
                            <svg class="w-8 h-8 text-indigo-600 transition-transform duration-300 hover:rotate-12"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-2 transition-colors duration-300 hover:text-indigo-600">
                            Мгновенная доставка</h3>
                        <p class="text-gray-600 transition-opacity duration-300 hover:opacity-90">Ключи приходят на
                            почту сразу после оплаты, в любое время суток</p>
                    </div>

                    <div class="text-center p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md">
                        <div class="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
                                  transition-all duration-300 transform hover:scale-110 hover:bg-indigo-200">
                            <svg class="w-8 h-8 text-indigo-600 transition-transform duration-300 hover:rotate-12"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-2 transition-colors duration-300 hover:text-indigo-600">
                            Безопасная оплата</h3>
                        <p class="text-gray-600 transition-opacity duration-300 hover:opacity-90">Принимаем карты,
                            электронные кошельки и криптовалюту</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
