<script setup lang="ts">
import { ExampleComponent, MyPanel } from '@skirtle/example-vue-lib'
</script>

<style scoped>
.panel {
  margin: 20px 0;
}
</style>

# Introduction

::: raw
<ExampleComponent />

<MyPanel title="Panel title" footer="Panel footer">
  Header and footer
</MyPanel>

<MyPanel title="Panel title">
  Just a header
</MyPanel>

<MyPanel footer="Panel footer">
  Just a footer
</MyPanel>

<MyPanel>
  No header or footer
</MyPanel>
:::
