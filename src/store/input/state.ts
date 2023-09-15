import { defineStore } from "pinia";

export const useInputStore = defineStore("input", {
  state: () => ({
    activeSrc: "USB-C Video",
  }),
});
