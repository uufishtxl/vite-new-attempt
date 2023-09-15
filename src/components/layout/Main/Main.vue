<template>
  <main class="w-[100vw] h-full">
    <div
      class="display-wrapper h-full flex"
      :class="{ ['display-wrapper__full-screen']: rootContext?.hideNav.value }"
    >
      <!-- 显示器框架区 -->
      <div class="monitor-frame h-full relative">
        <!-- <img class="monitor-frame__self" src="/img/frame.svg" /> -->
        <!-- 显示器屏幕 -->
        <div class="monitor-frame__screen-wrapper relative bg-red-900/30">
          <div id="filter"></div>
        </div>
        <!-- 显示器 Controls 区 -->
        <Icon class="monitor-frame__power" name="control-power" />
      </div>
      <!-- 电源按钮 -->
      <Controls />
    </div>
  </main>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { rootContextKey } from "../../../context";
import Controls from "../../Controls/Controls.vue";
const rootContext = inject(rootContextKey);
</script>
