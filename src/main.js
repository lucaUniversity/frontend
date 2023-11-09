import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import 'bootstrap/dist/css/bootstrap.css';



const app = createApp(App)


app.use(Vuetify)

app.mount('#app')
