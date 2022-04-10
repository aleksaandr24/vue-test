import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'

const app = createApp(App)

for (let component in components) {
  app.component(component, components[component])
}  

app.mount('#app')