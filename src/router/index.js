import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/about',
        name: 'About',

        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/register-student',
        name: 'RegisterStudent',
        component: () =>
            import ('../views/RegisterStudent.vue')
    },
    {
        path: '/register-admin',
        name: 'RegisterAdmin',
        component: () =>
            import ('../views/RegisterAdmin.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/student',
        name: 'Student',
        component: () =>
            import ('../views/DashboardStudent.vue'),
        children: [{

                path: 'principal',
                component: require('../components/student-views/Principal.vue').default
            },
            {
                path: 'solicitud',
                component: require('../components/student-views/Solicitud.vue').default
            },
            {
                path: 'actualizar-eliminar',
                component: require('../components/student-views/ActualizarEliminar.vue').default
            },
            {
                path: 'actualizar',
                component: require('../components/student-views/Actualizar.vue').default
            },
            {
                path: 'historial',
                component: require('../components/student-views/Historial.vue').default
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router