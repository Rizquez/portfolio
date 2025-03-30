<template>
    <footer>
        <div class="info">
            <router-link :to="{name: 'privacy', params: { url: 'privacy-policy' }}" class="router">Privacy policy</router-link>
            <p>© 2025 - Made with Vue.js</p>
        </div>
        <div class="rrss">
            <a href="https://github.com/Rizquez" target="_blank"><img src="@/assets/images/github.svg" alt="github"></a>
            <a href="https://www.linkedin.com/in/pedro-rizquez/" target="_blank"><img src="@/assets/images/linkedin.svg" alt="linkedin"></a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding: 50px 100px 20px 100px;
    display: flex;
    justify-content: space-between;
}
footer img {
    max-width: 40px;
}
footer p {
    font-weight: lighter;
    color: var(--text-100);
    font-size: var(--p-font);
}
footer .rrss {
    display: flex;
    gap: 0.5rem;
    align-items: end;
}
footer .router {
    text-decoration: none;
    font-weight: lighter;
    color: var(--text-100);
    font-size: var(--p-font);
}
footer .router:hover {
    color: var(--primary-100);
}
</style>