<script setup>
const { data: Games } = await useFetch("https://6741ccdfe4647499008ecf09.mockapi.io/GameKeys")

const searchQuery = ref("");
const showResults = ref(false);

const searchResults = computed(() => {
    if (!searchQuery.value) {
        return [];
    }
    const query = searchQuery.value.toLowerCase();
    return Games.value.filter(game => game.Title.toLowerCase().includes(query));
});

const handleSearch = () => {
    if (searchQuery.value) {
        showResults.value = true
    }
}

const closeSearch = () => {
    showResults.value = false
}

const onClickOutside = (event) => {
    const searchContainer = event.target.closest('.relative')
    if (!searchContainer) {
        closeSearch();
    }
}

onMounted(() => {
    document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside)
})
</script>

<template>
    <div class="relative">
        <div class="flex items-center">
            <input v-model="searchQuery" @input="handleSearch" @focus="showResults = true" type="text"
                placeholder="Поиск игр..." class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ease-in-out hover:border-indigo-300
                text-sm
                xs:w-40 sm:w-48 md:w-64 lg:w-80 xl:w-96">
            <button
                class="ml-2 p-2 text-gray-500 hover:text-indigo-600 transition-colors duration-200 ease-in-out transform hover:scale-110">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>

        <transition enter-active-class="transition-all duration-200 ease-out"
            leave-active-class="transition-all duration-150 ease-in" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95">
            <div v-if="showResults && searchResults.length > 0" class="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto transform origin-top
                xs:right-0 xs:w-48 sm:w-64 md:w-full md:max-h-96" @click.away="closeSearch">
                <NuxtLink v-for="game in searchResults" :key="game.id" :to="`${game.id}`" @click="closeSearch"
                    class="flex items-center p-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150 ease-in-out">
                    <img :src="game.image" :alt="game.title" class="w-8 h-8 object-cover rounded mr-2">
                    <div class="flex-1 min-w-0">
                        <h3 class="font-medium text-gray-900 truncate text-xs sm:text-sm">{{ game.Title }}</h3>
                        <p class="text-xs text-gray-500 truncate">{{ game.platform }}</p>
                    </div>
                    <div class="ml-1 font-medium text-indigo-600 whitespace-nowrap text-xs sm:text-sm">
                        {{ game.price.toLocaleString('ru-RU') }} ₽
                    </div>
                </NuxtLink>
            </div>
        </transition>

        <transition enter-active-class="transition-all duration-200 ease-out"
            leave-active-class="transition-all duration-150 ease-in" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95">
            <div v-if="showResults && searchQuery && searchResults.length === 0" class="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-3 text-gray-500 transform origin-top
                text-xs sm:text-sm
                xs:right-0 xs:w-48 sm:w-64 md:w-full">
                Игры по запросу "{{ searchQuery }}" не найдены
            </div>
        </transition>
    </div>
</template>