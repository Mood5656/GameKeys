<script setup>
const {
    cart,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalItems
} = useCart()

const proceedToCheckout = () => {
    navigateTo('/checkout')
}

const orderForm = reactive({
    name: '',
    email: '',
    phone: '',
    payment: ''
})

const submitOrder = async () => {
    const response = await $fetch('/api/orders', {
        method: 'POST',
        body: {
            customer: orderForm,
            items: cart.value,
            total: totalPrice.value
        }
    })
}
</script>

<template>
    <div class="py-8">
        <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold mb-8">Корзина</h1>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <template v-if="cart.length > 0">
                        <div v-for="item in cart" :key="item.id" class="bg-white rounded-lg p-4 mb-4 shadow-sm">
                            <div class="flex items-start">
                                <img :src="item.image" :alt="item.Title" class="w-20 h-20 object-cover rounded mr-4">

                                <div class="flex-1">
                                    <h3 class="font-medium">{{ item.Title }}</h3>
                                    <p class="text-gray-500 text-sm">{{ item.platform }}</p>

                                    <div class="flex items-center justify-between mt-2">
                                        <div class="flex items-center">
                                            <button @click="updateQuantity(item.id, item.quantity - 1)"
                                                :disabled="item.quantity <= 1"
                                                class="w-8 h-8 flex items-center justify-center border rounded-md disabled:opacity-50">
                                                -
                                            </button>
                                            <span class="mx-4">{{ item.quantity }}</span>
                                            <button @click="updateQuantity(item.id, item.quantity + 1)"
                                                class="w-8 h-8 flex items-center justify-center border rounded-md">
                                                +
                                            </button>
                                        </div>

                                        <div class="text-right">
                                            <p class="font-bold">
                                                {{ (item.price * item.quantity).toLocaleString('ru-RU') }} ₽
                                            </p>
                                            <button @click="removeFromCart(item.id)"
                                                class="text-red-500 text-sm hover:text-red-700 mt-1">
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <div v-else class="bg-gray-50 rounded-lg p-8 text-center">
                        <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                            </path>
                        </svg>
                        <h3 class="mt-4 text-lg font-medium text-gray-900">Ваша корзина пуста</h3>
                        <NuxtLink to="/catalog"
                            class="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                            Перейти в каталог
                        </NuxtLink>
                    </div>
                </div>

                <div v-if="cart.length > 0" class="bg-gray-50 rounded-lg p-6 h-fit sticky top-4">
                    <h2 class="text-xl font-bold mb-4">Оформление заказа</h2>

                    <form @submit.prevent="submitOrder" class="space-y-4">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">ФИО*</label>
                            <input v-model="orderForm.name" type="text" id="name" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                            <input v-model="orderForm.email" type="email" id="email" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Телефон*</label>
                            <input v-model="orderForm.phone" type="tel" id="phone" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        </div>

                        <div>
                            <label for="payment" class="block text-sm font-medium text-gray-700 mb-1">Способ
                                оплаты*</label>
                            <select v-model="orderForm.payment" id="payment" required
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option value="">Выберите способ оплаты</option>
                                <option value="card">Банковская карта</option>
                                <option value="qiwi">QIWI</option>
                                <option value="yoomoney">ЮMoney</option>
                                <option value="crypto">Криптовалюта</option>
                            </select>
                        </div>

                        <div class="space-y-3 border-t border-gray-200 pt-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Товары ({{ totalItems }})</span>
                                <span>{{ totalPrice.toLocaleString('ru-RU') }} ₽</span>
                            </div>

                            <div class="flex justify-between">
                                <span class="text-gray-600">Скидка</span>
                                <span class="text-red-500">-0 ₽</span>
                            </div>

                            <div class="flex justify-between font-bold text-lg pt-2">
                                <span>Итого</span>
                                <span>{{ totalPrice.toLocaleString('ru-RU') }} ₽</span>
                            </div>
                        </div>

                        <button type="submit"
                            class="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition font-medium">
                            Подтвердить заказ
                        </button>

                        <p class="text-xs text-gray-500">
                            Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
