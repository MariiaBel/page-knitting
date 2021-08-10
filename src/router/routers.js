import HomePage from '@/pages/Home.vue'
import Err404Page from '@/pages/404.vue'
export const routes = [
    {
        path: '',
        name: "home",
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