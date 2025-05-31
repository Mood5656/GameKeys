<script setup>
const route = useRoute();
const code = route.query.code;

const formData = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: "http://localhost:3000/google_login",
    grant_type: 'authorization_code',
    code: code
}

const formEncode = Object.keys(formData).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])).join('&')

const GOOGLE_TOKEN_URI = "https://oauth2.googleapis.com/token";

const getAccessToken = async () => {
    const { data, status, error, refresh } = await useFetch(GOOGLE_TOKEN_URI, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formEncode,
    });
    return data.value["access_token"];
};

const token = await getAccessToken();

const GOOGLE_USER_INFO_URI = "https://www.googleapis.com/oauth2/v1/userinfo";

const getUserInformationGoogle = async (token) => {
    const { data, status, error, refresh } = await useFetch(GOOGLE_USER_INFO_URI, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data.value;
};

const userInfo = await getUserInformationGoogle(token)

const authStore = useAuthStore();

console.log(userInfo)

if (userInfo) {
    authStore.login(userInfo)
    await navigateTo('/index1')
}
</script>