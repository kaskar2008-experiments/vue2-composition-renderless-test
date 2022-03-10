import Vue from 'vue'
import VueCompositionAPI, { createApp } from '@vue/composition-api'

Vue.use(VueCompositionAPI)

import App from './App.vue'

const app = createApp(App)
app.use(VueCompositionAPI)
app.mount('#app')
