import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

//El router se encarga de mostrar las vistas mediante URLs

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
                component: require('../components/student-views/Actualizar.vue').default,
                props: true,
                name: 'actualizarMatricula',
            },
            {
                path: 'historial',
                component: require('../components/student-views/Historial.vue').default
            }
        ]
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ('../views/DashboardAdmin.vue'),
        children: [{
                path: 'principal',
                component: require('../components/admin-views/Principal.vue').default
            },
            {
                path: 'aceptar-eliminar',
                component: require('../components/admin-views/AprobarRechazar.vue').default
            },
            {
                path: 'lista-matricula',
                component: require('../components/admin-views/ListaMatricula.vue').default
            },
            {
                path: 'crear-docente',
                component: require('../components/admin-views/CrearDocente.vue').default
            },
            {
                path: 'crear-curso',
                component: require('../components/admin-views/CrearCurso.vue').default
            },
            {
                path: 'crear-seccion',
                component: require('../components/admin-views/CrearSeccion.vue').default
            },
            {
                path: 'actualizar-eliminar-docente',
                component: require('../components/admin-views/ActualizarEliminarDocente.vue').default
            },
            {
                path: 'actualizar-eliminar-curso',
                component: require('../components/admin-views/ActualizarEliminarCurso.vue').default
            },
            {
                path: 'actualizar-eliminar-seccion',
                component: require('../components/admin-views/ActulizarEliminarSeccion.vue').default
            },
            {
                path: 'actualizar-docente',
                component: require('../components/admin-views/ActualizarDocente.vue').default,
                props: true,
                name: 'actualizarDocente',
            },
            {
                path: 'actualizar-curso',
                name: 'actualizarCurso',
                component: require('../components/admin-views/ActualizarCurso.vue').default,
                props: true
            },
            {
                path: 'actualizar-seccion',
                component: require('../components/admin-views/ActualizarSeccion.vue').default,
                props: true,
                name: 'actualizarSeccion',
            },
            {
                path: 'lista-docente',
                component: require('../components/admin-views/ListaDocente.vue').default
            },
            {
                path: 'lista-curso',
                component: require('../components/admin-views/ListaCurso.vue').default
            },
            {
                path: 'lista-secciones',
                component: require('../components/admin-views/ListaSecciones.vue').default
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