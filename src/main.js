import "./styles/styles.scss";

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate, { Validator } from 'vee-validate'
import App from './components/App.vue'
import routes from './routes'

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

// Validator.updateDictionary({
//   pt_BR: {
//     messages: validationMessages
//   }
// });

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VeeValidate, {
  // locale: 'pt_BR'
})

Vue.http.options.root = 'http://localhost:8080'

const router = new VueRouter()

router.map(routes)

router.start(App, '#app')
