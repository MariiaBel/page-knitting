import HomePage from '@/pages/Home.vue'
import Err404Page from '@/pages/404.vue'

import vueConfig from "@/../vue.config"
export const routes = [
    {
        path: vueConfig.publicPath,
        name: "home",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}about`,
        name: "about",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}yarn`,
        name: "yarn",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}spokes`,
        name: "spokes",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}hooks`,
        name: "hooks",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}accessories`,
        name: "accessories",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}certificates`,
        name: "certificates",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}mk`,
        name: "mk",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}models`,
        name: "models",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}basket`,
        name: "basket",
        component: HomePage
    },
    {
        path: `${vueConfig.publicPath}404`,
        name: '404',
        component: Err404Page
    },
    {
        path: `${vueConfig.publicPath}:CatchAll(.*)*`,
        redirect: { name: '404' }
    }
]