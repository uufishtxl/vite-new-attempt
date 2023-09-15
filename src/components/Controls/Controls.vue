<template>
  <div class="joystick-wrapper h-full flex justify-center p-[0.5vw]">
    <div class="joystick">
      <div class="joystick__overlay w-full h-full grid gap-0">
        <div class="joystick__overlay_grid" id="up"></div>
        <div class="joystick__overlay_grid" id="left"></div>
        <div class="joystick__overlay_grid" id="center"></div>
        <div class="joystick__overlay_grid" id="right"></div>
        <div class="joystick__overlay_grid" id="down"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
