import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VuelidatePlugin } from '@vuelidate/core'
import { sam } from './utils/validate'

import 'bootstrap/dist/css/bootstrap.css'

createApp(App).mixin(sam).use(VuelidatePlugin).use(store).use(router).mount('#app')
