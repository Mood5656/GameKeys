<template>
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">GameKeys</h3>
                    <p class="text-gray-400">Лучшие цены на игровые ключи для Steam, Xbox, PlayStation и других
                        платформ.</p>
                </div>

                <div>
                    <h4 class="font-bold mb-4">Магазин</h4>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink to="catalog" class="text-gray-400 hover:text-white transition">Каталог</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="promotions" class="text-gray-400 hover:text-white transition">Акции</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="promotions" class="text-gray-400 hover:text-white transition">Новинки
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold mb-4">Поддержка</h4>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink to="faq" class="text-gray-400 hover:text-white transition">FAQ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="policy" class="text-gray-400 hover:text-white transition">Политика возврата
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold mb-4">Контакты</h4>
                    <p class="text-gray-400 mb-2">support@gamekeys.ru</p>
                    <p class="text-gray-400">+7 (123) 456-78-90</p>
                </div>
            </div>

            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                <p>© 2023 GameKeys. Все права защищены.</p>
            </div>
        </div>
    </footer>
</template>