<script setup>
import { io } from 'socket.io-client'

let messages = ref([]);
let username = ref('');
let connect = ref(false);
let text = ref('')

let socket = null
if (process.client) {
    socket = io('ws://localhost:3000');
    connect.value = true;
    socket.on('initial', (data) => {
        messages.value = data
    })
    socket.on("chat message", (data) => {
        messages.value.push({ text: data.text, username: data.username })
    })
}

function sendMessage() {
    socket.emit('chat message', { username: username.value, text: text.value })
}

</script>

<template>
    <div
        class="flex flex-col h-screen max-w-2xl mx-auto border border-gray-300 rounded-lg overflow-hidden bg-gray-50 transition-all duration-300 hover:shadow-lg">
        <div class="mb-3 p-2 rounded-lg max-w-[70%] break-words transform transition-all duration-200">
            <input type="text" placeholder="Username" v-model="username"
                class="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out hover:border-blue-400">
        </div>

        <div class="flex-1 p-4 overflow-y-auto bg-white">
            <transition-group name="messages" tag="div" enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 translate-x-4"
                enter-to-class="opacity-100 translate-x-0" leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-4" move-class="transition-all duration-300 ease-in-out">
                <div v-for="(message, index) in messages" :key="index"
                    class="mb-2 p-2 rounded-lg max-w-[70%] break-words transition-all duration-200 hover:bg-gray-50"
                    :class="{
                        'ml-auto bg-blue-100': message.username === username,
                        'mr-auto bg-gray-200': message.username !== username
                    }">
                    <span class="font-semibold">{{ message.username }}:</span> {{ message.text }}
                </div>
            </transition-group>
        </div>

        <div class="flex p-2 bg-gray-100 border-t border-gray-300">
            <input type="text" v-model="text" @keyup.enter="sendMessage"
                class="flex-1 p-2 border border-gray-300 rounded mr-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out hover:border-blue-400">
            <button @click="sendMessage"
                class="px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer text-base hover:bg-blue-700 active:scale-95 transform transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Send Message
            </button>
        </div>
    </div>
</template>
