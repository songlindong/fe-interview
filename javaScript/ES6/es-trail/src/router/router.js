import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import My from '../views/My.vue'

Vue.use(Router);

const routes = [{
        path: '/home/:type',
        component: Home,
        name: 'home'
    }, {
        path: '/my',
        component: My,
        name: 'my'
    }, {
        path: '/*',
        redirect: '/home/all'
    }, {
        path: '',
        redirect: '/home/all'
    }
];

const router = new Router({
    mode: 'history',
    routes
})

export default router
