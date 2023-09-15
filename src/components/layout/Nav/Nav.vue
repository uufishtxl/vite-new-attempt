<template>
  <nav class="nav h-full flex flex-col gap-[3vw]">
    <!-- SOURCES -->
    <div
      class="nav__sources-wrapper flex flex-col gap-[1vw]"
      :class="{ ['nav__sources-wrapper-dell']: false }"
    >
      <SourceItem v-for="(src, id) in sources" :source="src" :key="id" />
    </div>
    <!-- help -->
    <div class="nav__help-wrapper flex-grow">
      <div
        class="nav__help-wrapper__header flex flex-row justify-center items-center gap-[1vw]"
      >
        <Icon name="questions" />
        <span>Help</span>
      </div>
      <div class="nav__help-wrapper__content">Welcome to HXXXX</div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { sources } from "../../../data";
import SourceItem from "../../SourceItem/SourceItem.vue";
</script>
