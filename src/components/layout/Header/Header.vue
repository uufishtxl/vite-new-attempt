<template>
  <header
    class="header w-full h-[3.5vw] flex items-center px-4"
    :class="{
      [`header-${rootContext && rootContext.brand}`]:
        rootContext && rootContext.brand,
    }"
  >
    <button
      class="header__toggle w-[3vw] h-[3vw] rounded-full flex items-center justify-center"
      @click="
        () => {
          toggleNav();
        }
      "
    >
      <Icon class="header__icon" :name="toggleIconName" />
    </button>
    <span class="text-xl font-bold ml-[1.5vw]">{{ model }}</span>
    {{ count }}
  </header>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import { rootContextKey } from "../../../context";
import { model } from "../../../data";
import { useInputStore } from "@/store/input/index";
const store = useInputStore();
const count = store.activeSrc;
const rootContext = inject(rootContextKey);
const toggleIconName = computed(() =>
  rootContext?.brand === "hp" ? `logo-hp` : "logo-dell"
);
const toggleNav = () => {
  if (rootContext) {
    rootContext.toggleNav();
  }
};
</script>
