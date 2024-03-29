import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import { store } from "./store/index";
import "./assets/css/main.css";

const app = createApp(App);
app.use(routes);
app.use(store);
app.mount("#app");
