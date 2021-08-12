import HomePage from '@/pages/Home.vue'
import Err404Page from '@/pages/404.vue'
export const routes = [
    {
        path: '',
        name: "home",
        component: HomePage
    },
    {
        path: '/yarn',
        name: "yarn",
        component: HomePage
    },
    {
        path: '/spokes',
        name: "spokes",
        component: HomePage
    },
    {
        path: '/hooks',
        name: "hooks",
        component: HomePage
    },
    {
        path: '/accessories',
        name: "accessories",
        component: HomePage
    },
    {
        path: '/certificates',
        name: "certificates",
        component: HomePage
    },
    {
        path: '/mk',
        name: "mk",
        component: HomePage
    },
    {
        path: '/models',
        name: "models",
        component: HomePage
    },
    {
        path: '/basket',
        name: "basket",
        component: HomePage
    },
    {
        path: `/404`,
        name: '404',
        component: Err404Page
    },
    {
        path: `/:CatchAll(.*)*`,
        redirect: { name: '404' }
    }
]