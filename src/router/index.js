import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import city from '@/pages/city/city'
import detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: index
        },
        {
            path: '/city',
            name: 'City',
            component: city
        },
        {
            path: '/detail',
            name: 'Detail',
            component: detail
        }
    ]
})
