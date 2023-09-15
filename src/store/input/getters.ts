// input/inputGetters.ts

import { useInputStore } from "./state";

export const useInputGetters = {
  activeSrcUpperCase(): string {
    const inputStore = useInputStore();
    return inputStore.activeSrc.toUpperCase();
  },
};
