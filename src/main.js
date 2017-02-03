import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App.vue'
import routes from './routes'

import "!css-loader!sass-loader!./styles/styles.sass";

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = 'http://localhost:8080'

const router = new VueRouter()

router.map(routes)

router.start(App, '#app')
