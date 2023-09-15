// input/mutations.ts

import { useInputStore } from "./state";

export const useInputMutations = {
  setActiveSrc(value: string) {
    const inputStore = useInputStore();
    inputStore.activeSrc = value;
  },
};
