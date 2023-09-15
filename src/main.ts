import { createApp } from "vue";
import pinia from "./store/index";
import "./styles/index.css";
import App from "./App.vue";
import Icon from "./components/Icon/Icon.vue";

const app = createApp(App);

app.use(pinia);

app.component("Icon", Icon).mount("#app");
