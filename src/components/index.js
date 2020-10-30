import haederNav from './common/haeder-nav.vue'
import homeHaeder from './common/home-header.vue'
import pageHaeder from './common/page-header.vue'
import Vue from 'vue'
const comp = {
    install(vue){
        vue.component('haeder-nav',haederNav)
        vue.component('home-haeder',homeHaeder)
        vue.component('page-haeder',pageHaeder)
    }
}
Vue.use(comp)