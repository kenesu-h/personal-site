import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTerminal,
  faWindowMinimize,
  faWindowMaximize,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTerminal);
library.add(faWindowMinimize);
library.add(faWindowMaximize);
library.add(faXmark);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
