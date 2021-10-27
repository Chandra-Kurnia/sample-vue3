import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Auth from '../views/Auth.vue'
import FormSignin from '../components/module/FormSignin.vue'
import FormSignup from '../components/module/FormSignup.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: route => ({name: route.query.name})
    },
    {
        path: '/about/:name',
        name: 'About',
        component: About
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
        children: [
            {
                path: 'signin',
                component: FormSignin
            },
            {
                path: 'signup',
                component: FormSignup
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router