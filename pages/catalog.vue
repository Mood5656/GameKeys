<script setup>
const { data: Games } = await useFetch("https://6741ccdfe4647499008ecf09.mockapi.io/GameKeys");

const selectedPlatform = ref('Все платформы');
const selectedSort = ref('Сортировка');

const platforms = computed(() => {
    const allPlatforms = ['Все платформы', ...new Set(Games.value.map(game => game.platform))];
    return allPlatforms.filter(platform => platform);
});

const filteredGames = computed(() => {
    let result = [...Games.value];

    if (selectedPlatform.value !== 'Все платформы') {
        result = result.filter(game => game.platform === selectedPlatform.value);
    }

    switch (selectedSort.value) {
        case 'По цене (дешевые)':
            return result.sort((a, b) => a.price - b.price);
        case 'По цене (дорогие)':
            return result.sort((a, b) => b.price - a.price);
        case 'По алфавиту':
            return result.sort((a, b) => a.Title.localeCompare(b.Title));
        case 'По популярности':
        default:
            return result;
    }
});

const { addToCart } = useCart()


</script>

<template>
    <div class="py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
                <h1 class="text-3xl font-bold mb-4 md:mb-0 transform transition-all duration-300 hover:scale-105 hover:text-indigo-600">
                    Каталог игр
                </h1>

                <div class="flex space-x-4">
                    <select v-model="selectedPlatform" 
                            class="border rounded-md px-3 py-2 bg-white transition-all duration-200 ease-in-out 
                                   hover:border-indigo-300 hover:shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        <option v-for="platform in platforms" :key="platform">
                            {{ platform }}
                        </option>
                    </select>

                    <select v-model="selectedSort" 
                            class="border rounded-md px-3 py-2 bg-white transition-all duration-200 ease-in-out 
                                   hover:border-indigo-300 hover:shadow-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                        <option>Сортировка</option>
                        <option>По цене (дешевые)</option>
                        <option>По цене (дорогие)</option>
                        <option>По алфавиту</option>
                    </select>
                </div>
            </div>

            <transition-group 
                enter-active-class="transition-all duration-500 ease-out"
                leave-active-class="transition-all duration-300 ease-in"
                enter-from-class="opacity-0 translate-y-8"
                enter-to-class="opacity-100 translate-y-0"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-8"
                move-class="transition-all duration-500 ease-in-out"
                tag="div" 
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                <ProductCard 
                    v-for="product in filteredGames" 
                    :key="product.id" 
                    :product="product"
                    @add-to-cart="addToCart(product)"
                    class="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl" 
                />
            </transition-group>
        </div>
    </div>
</template>
