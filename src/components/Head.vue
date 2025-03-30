<template>
    <header>
        <div>
            <img src="@/assets/images/code-thinking.svg" alt="code-thinking">
        </div>
        <div class="routers">
            <router-link :to="{name: 'home'}" class="router">Home</router-link>
            <router-link :to="{name: 'home'}" class="router">About</router-link>
            <router-link :to="{name: 'home'}" class="router">Projects</router-link>
        </div>
        <div>
            <router-link :to="{name: 'contact', params: { url: 'contact-me' }}" class="router contact">Contact me</router-link>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    padding: 40px 100px;
}
header img {
    max-width: 150px;
    max-height: auto;
}
header p {
    margin: 0;
}
header .router, p {
    text-decoration: none;
    font-weight: lighter;
    color: var(--text-100);
    font-size: var(--p-font);
}
header .router:hover {
    color: var(--primary-100);
}

.routers {
    display: flex;
    gap: 8rem;
}

.contact {
    border: 1px solid var(--text-100);
    border-radius: 50px;
    padding: 5px 10px;
}
.contact:hover {
    background-color: var(--accent-200);
}
</style>
 