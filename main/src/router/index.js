import {
    createRouter,
    createWebHistory
} from "vue-router";
import normal from "../views/normal.vue";
import happy from "../views/happy.vue"

const routes = [{
    path: "/normal",
    name: "normal",
    component: normal,
    meta: {
        background: 'gray',
        color: 'whitesmoke'
    }
}, {
    path: "/happy",
    name: "happy",
    component: happy,
    meta: {
        background: 'white',
        color: 'black'
    }
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;