import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import '../src/static/css/index.css';
import '../src/static/css/animation.css'

createApp(App).use(router).mount("#app");