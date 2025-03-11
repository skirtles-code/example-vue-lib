import { fileURLToPath, URL } from 'node:url'

import { defineConfigWithTheme } from 'vitepress'

const librarySrc = fileURLToPath(new URL('../../example-vue-lib/src/', import.meta.url))
const playgroundSrc = fileURLToPath(new URL('../src/', import.meta.url))

export default ({ mode }: { mode: string }) => defineConfigWithTheme({
  srcDir: './src',
  outDir: './dist',
  base: '/',
  title: '@skirtle/example-vue-lib',
  lang: 'en-US',
  description: 'Description',
  cleanUrls: true,

  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '@',
          customResolver(source, importer) {
            return source.replace(
              /^@\//,
              importer?.startsWith(librarySrc) ? librarySrc : playgroundSrc
            )
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
  },

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/introduction' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/skirtles-code/example-vue-lib' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          {
            text: 'Introduction',
            link: '/introduction'
          }
        ]
      }
    ]
  }
})
