<script setup>
const faqItems = ref([
    {
        question: "Как активировать ключ в Steam?",
        answer: `1. Откройте клиент Steam<br>
  2. В меню выберите "Игры" → "Активировать через Steam..."<br>
  3. Введите ключ активации и следуйте инструкциям<br>
  4. После активации игра появится в вашей библиотеке`
    },
    {
        question: "Сколько времени занимает доставка ключа?",
        answer: "Ключи доставляются мгновенно после успешной оплаты. Если вы не получили ключ в течение 5 минут, проверьте папку 'Спам' в вашей почте или свяжитесь с нашей поддержкой."
    },
    {
        question: "Какие способы оплаты вы принимаете?",
        answer: "Мы принимаем банковские карты (Visa, Mastercard, МИР), электронные кошельки (Qiwi, ЮMoney), криптовалюты (Bitcoin, USDT) и другие популярные платежные системы."
    },
    {
        question: "Можно ли вернуть ключ после покупки?",
        answer: "Возврат возможен только в случае, если ключ не был активирован и с момента покупки прошло не более 14 дней. Подробные условия читайте в нашей <NuxtLink to='/refund-policy' class='text-indigo-600 hover:underline'>Политике возврата</NuxtLink>."
    },
    {
        question: "Ключ не работает. Что делать?",
        answer: "Если ключ не активируется, пожалуйста, убедитесь что:<br>- Вы вводите ключ без ошибок<br>- Ключ активируется в правильном регионе<br>- У вас нет ограничений в платформе<br>Если проблема сохраняется, свяжитесь с нашей поддержкой."
    }
])

const activeFaqIndex = ref(null)

const toggleFaq = (index) => {
    activeFaqIndex.value = activeFaqIndex.value === index ? null : index
}
</script>

<template>
    <div class="py-12 bg-gray-50 min-h-screen">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h1
                    class="text-4xl font-bold text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105 animate-[fadeIn_0.6s_ease-out_forwards]">
                    Часто задаваемые вопросы
                </h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-[fadeInUp_0.6s_ease-out_forwards_0.1s]">
                    Найдите ответы на популярные вопросы о покупке и активации игровых ключей
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="space-y-4">
                    <div v-for="(item, index) in faqItems" :key="index"
                        class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                        <button @click="toggleFaq(index)"
                            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group">
                            <h3
                                class="text-lg font-medium text-gray-900 transition-all duration-200 group-hover:text-indigo-600">
                                {{ item.question }}
                            </h3>
                            <svg class="w-5 h-5 text-indigo-600 transition-transform duration-300 ease-in-out"
                                :class="{ 'rotate-180': activeFaqIndex === index }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        <transition enter-active-class="transition-all duration-300 ease-out"
                            enter-from-class="transform opacity-0 max-h-0"
                            enter-to-class="transform opacity-100 max-h-screen"
                            leave-active-class="transition-all duration-200 ease-in"
                            leave-from-class="transform opacity-100 max-h-screen"
                            leave-to-class="transform opacity-0 max-h-0">
                            <div v-show="activeFaqIndex === index" class="px-6 pb-4 pt-0 text-gray-600 overflow-hidden">
                                <p v-html="item.answer" class="animate-[fadeIn_0.6s_ease-out_forwards]"></p>
                            </div>
                        </transition>
                    </div>
                </div>

                <div
                    class="mt-12 bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:scale-[1.01]">
                    <h3 class="text-lg font-medium text-gray-900 mb-4 animate-[fadeIn_0.6s_ease-out_forwards]">
                        Не нашли ответ на свой вопрос?
                    </h3>
                    <p class="text-gray-600 mb-4 animate-[fadeIn_0.6s_ease-out_forwards_0.1s]">
                        Свяжитесь с нашей службой поддержки через чат, и мы обязательно вам поможем.
                    </p>
                    <NuxtLink to="/chat" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all 
                        duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                        Связаться с поддержкой
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
