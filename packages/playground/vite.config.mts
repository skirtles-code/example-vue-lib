import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const librarySrc = fileURLToPath(new URL('../example-vue-lib/src/', import.meta.url))
const playgroundSrc = fileURLToPath(new URL('./src/', import.meta.url))

export default defineConfig(({ mode }): UserConfig => ({
  plugins: [
    vue(),
    vueDevTools()
  ],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: '@',
        customResolver(source, importer, options) {
          const filePath = source.replace(
            /^@\//,
            importer?.startsWith(librarySrc) ? librarySrc : playgroundSrc
          )

          return this.resolve(filePath, importer, options)
        }
      }, {
        find: '@skirtle/example-vue-lib',
        replacement: librarySrc
      }
    ]
  },

  define: {
    __DEV__: mode !== 'production',
    __TEST__: false
  }
}))
