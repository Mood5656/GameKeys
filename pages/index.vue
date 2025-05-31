<script setup>
const GOOGLE_AUTH_URI = "https://accounts.google.com/o/oauth2/auth"

const GOOGLE_REDIRECT_URI = "http://localhost:3000/google_login"

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const GOOGLE_SCOPES = ["https://www.googleapis.com/auth/userinfo.email"]

const uri = `${GOOGLE_AUTH_URI}?redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=${GOOGLE_SCOPES.join(" ")}`
</script>

<template>
    <NuxtLink :to="uri">Войти с помощью Google</NuxtLink>
</template>