import { Tooltip } from 'bootstrap'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import i18n from '@/core/plugins/i18n'
import ElementPlus from 'element-plus'
import router from './router'

//imports for app initialization
import { initApexCharts } from '@/core/plugins/apexcharts'
import { initInlineSvg } from '@/core/plugins/inline-svg'
import { initKtIcon } from '@/core/plugins/keenthemes'
import { initVeeValidate } from '@/core/plugins/vee-validate'
import ApiService from '@/core/services/ApiService'

import '@/core/plugins/prismjs'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component('VueSlider', VueSlider)
ApiService.init(app)
initApexCharts(app)
initInlineSvg(app)
initKtIcon(app)
initVeeValidate()

app.use(i18n)

app.directive('tooltip', (el) => {
  new Tooltip(el)
})

app.mount('#app')
