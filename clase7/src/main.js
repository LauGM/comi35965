import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.filter('formatFrase',(frase)=>{
  return frase.toUpperCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
