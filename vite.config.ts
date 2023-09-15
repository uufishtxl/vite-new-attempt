import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { svgBuilder } from "./build/svg/svgBuilder";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgBuilder("./src/icons/svg/")],
  base: "./",

  resolve: {
    alias: {
      "@": "/src", // 这里设置了别名 @ 指向 src 目录
    },
  },
});
