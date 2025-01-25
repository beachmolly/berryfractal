import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import GalleryPage from '../pages/GalleryPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/gallery', component: GalleryPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;