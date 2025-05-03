import { createApp } from 'vue'
import App from '@/App.vue'

// css
import "@/style.css";
import "@/assets/tailwind.css";

// router
import router from '@/routers'

const app = createApp(App);


app.use(router);
app.mount('#app')
