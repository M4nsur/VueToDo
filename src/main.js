import { createApp } from "vue";
import App from "./App.vue";
import routers from "./router";
import "./assets/css/main.css";

const app = createApp(App);
app.use(routers);
app.mount("#app");
