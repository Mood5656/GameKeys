<script setup>

const props = defineProps({
    product: {
        type: Object,
        required: true
    },
    badge: {
        type: String,
        default: ''
    }
})

defineEmits(['add-to-cart'])

const badgeClass = computed(() => {
    return {
        'Новинка': 'bg-green-100 text-green-800',
        'Акция': 'bg-red-100 text-red-800',
        'Хит': 'bg-amber-100 text-amber-800'
    }[props.badge] || 'bg-gray-100 text-gray-800'
})


</script>


<template>
    <NuxtLink :to="`${product.id}`"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 group">
        <div class="relative overflow-hidden">
            <img :src="product.image" :alt="product.title"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105">
            <span v-if="badge"
                class="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-md shadow-sm transition-all duration-300 hover:scale-110"
                :class="badgeClass">
                {{ badge }}
            </span>
            <span
                class="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-all duration-300 hover:bg-gray-700">
                {{ product.platform }}
            </span>
        </div>

        <div class="p-4 flex-grow flex flex-col">
            <h3 class="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-indigo-600">
                {{ product.Title }}
            </h3>
            <h3 class="font-bold text-lg mb-2 text-gray-600">
                Количество: {{ product.quantity }}
            </h3>
            <div class="mt-auto">
                <div class="flex items-center justify-between">
                    <div class="transition-all duration-300 group-hover:scale-[1.02]">
                        <span v-if="product.discountPrice"
                            class="text-gray-500 line-through mr-2 transition-opacity duration-300 hover:opacity-80">
                            {{ product.price.toLocaleString('ru-RU') }} ₽
                        </span>
                        <span class="font-bold transition-colors duration-300"
                            :class="product.discountPrice ? 'text-indigo-600 group-hover:text-indigo-700' : 'text-gray-900 group-hover:text-indigo-600'">
                            {{ (product.discountPrice || product.price).toLocaleString('ru-RU') }} ₽
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
