import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Faq from '@/components/faq'
import Help from '@/components/help'
import Kontakt from '@/components/kontakt'
import Policy from '@/components/sekretesspolicy'
import UTerms from '@/components/userTerms'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/faq', name: 'faq', component: Faq },
    { path: '/help', name: 'helo', component: Help },
    { path: '/kontakt', name: 'kontakt', component: Kontakt },
    { path: '/policy', name: 'Policy', component: Policy },
    { path: '/userterms', name: 'Userterms', component: UTerms }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
