import { relative, sep as pathSeparator } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfigWithTheme } from 'vitepress'

const librarySrc = fileURLToPath(new URL('../../example-vue-lib/src/', import.meta.url))
const docsSrc = fileURLToPath(new URL('../src/', import.meta.url))

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
          customResolver(source, importer, options) {
            let target = docsSrc

            // If the importer is inside librarySrc we resolve @ to that path
            if (importer && relative(importer, librarySrc).split(pathSeparator).every(p => p === '..')) {
              target = librarySrc
            }

            const filePath = source.replace(/^@\//, target)

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
