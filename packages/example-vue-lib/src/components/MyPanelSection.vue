<script setup lang="ts">
import { inject, provide } from 'vue'

if (__DEV__) {
  const insideMyPanel = inject('MyPanel', false)

  if (!insideMyPanel) {
    console.warn('[@skirtle/example-vue-lib] MyPanelSection can only be used inside MyPanel')
  }

  provide('MyPanel', false)
}
</script>

<template>
  <div class="panel-section">
    <slot />
  </div>
</template>

<style scoped>
.panel-section {
  padding: 10px;
}
</style>
