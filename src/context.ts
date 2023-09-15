import { InjectionKey, Ref } from "vue";

export const rootContextKey = Symbol() as InjectionKey<{
  hideNav: Ref<boolean>;
  toggleNav: () => void;
  brand: string;
  activeSrc: Ref<string>;
}>;
