<template>
  <div
    class="source-item flex flex-row gap-[1.4vw] items-center"
    :class="{ ['is-active']: source.name === rootContext.activeSrc.value }"
  >
    <Icon class="source-item__icon" :name="source.icon" />
    <span>{{ source.name }}</span>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { SourceItemProps } from "./types";
import { rootContextKey } from "../../context";
defineProps<SourceItemProps>();
const rootContext = inject(rootContextKey)!;
</script>
