import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: ()=>import('../Layout/index'),
            children: [
                {
                    path: '/',
                    component: ()=>import('../pages/Home/view')
                },
                {
                    path: '/contact',
                    component: ()=>import('../pages/Contact/index')
                },
                {
                    path: '/about',
                    component: ()=>import('../pages/About/index')
                }
            ]
        }
    ]
})

export default Router
