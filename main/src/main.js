import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import comManage from './components/allComponents.js'
import '../src/static/css/index.css';
import '../src/static/css/animation.css'


const app = createApp(App);
comManage.init(app)
app.use(router)
app.mount("#app");
