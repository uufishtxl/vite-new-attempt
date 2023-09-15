// store.ts

import { createPinia } from "pinia";
import { useInputStore } from "./input"; // 导入子模块

const pinia = createPinia();

pinia.use(() => useInputStore()); // 使用子模块

export default pinia;
