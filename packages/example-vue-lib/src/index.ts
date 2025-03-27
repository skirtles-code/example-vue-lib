export { default as ExampleComponent } from './components/ExampleComponent.vue'
export { default as MyPanel } from './components/MyPanel.vue'
export { default as MyPanelSection } from './components/MyPanelSection.vue'

if (__DEV__) {
  console.log('[@skirtle/example-vue-lib] dev mode')
  console.log(`[@skirtle/example-vue-lib] __TEST__: ${__TEST__}`)
}
