<script setup lang="ts">
import { ref, provide } from "vue";
import { rootContextKey } from "./context";
import Header from "./components/layout/Header/Header.vue";
import Nav from "./components/layout/Nav/Nav.vue";
import Main from "./components/layout/Main/Main.vue";
import { brand } from "./data";
const hideNav = ref(false);
const activeSrc = ref("USB-C Video");
const toggleNav = () => {
  hideNav.value = !hideNav.value;
};
provide(rootContextKey, {
  hideNav,
  toggleNav,
  brand,
  activeSrc,
});
</script>

<template>
  <div class="w-[120vw] h-screen flex flex-col">
    <Header />
    <div
      class="main w-full flex-grow flex"
      :class="{ ['main__no-nav']: hideNav }"
    >
      <Nav />
      <Main />
    </div>
  </div>
</template>

<style scoped></style>
