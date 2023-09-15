<template>
  <i :class="['svg-icon', `svg-icon-${name}`]">
    <svg fill="currentColor" aria-hidden="true" width="1em" height="1em">
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  name: string;
}>();
const iconName = computed(() => `#icon-${props.name}`);
</script>
