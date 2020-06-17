import Vue from 'vue'
import VueRouter from 'vue-router'

import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import ContactUs from '../components/ContactUs.vue'
import HomePage from '../components/HomePage.vue'
import CallADoctor from '../components/CallADoctor.vue'
import BlogRefs from '../components/BlogRefs.vue'
import BMICalculator from '../components/BMICalculator.vue'
import AboutUs from '../components/AboutUs.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs
    },
    {
        path: '/calladoctor',
        name: 'calladoctor',
        component: CallADoctor
    },
    {
        path: '/blogrefs',
        name: 'blogrefs',
        component: BlogRefs
    },
    {
        path: '/bmicalculator',
        name: 'bmicalculator',
        component: BMICalculator
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router