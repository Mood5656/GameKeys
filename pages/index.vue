<script setup>
const GOOGLE_AUTH_URI = "https://accounts.google.com/o/oauth2/auth"

const GOOGLE_REDIRECT_URI = "http://localhost:3000/google_login"

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const GOOGLE_SCOPES = ["https://www.googleapis.com/auth/userinfo.email"]

const uri = `${GOOGLE_AUTH_URI}?redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=${GOOGLE_SCOPES.join(" ")}`
</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
        <NuxtLink :to="uri"
            class="flex items-center px-6 py-3 space-x-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.672-4.152-2.695-6.735-2.695-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.67-0.069-1.325-0.189-1.955h-9.811z" />
            </svg>
            <span>Войти с помощью Google</span>
        </NuxtLink>
    </div>
</template>