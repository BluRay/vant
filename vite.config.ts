import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, './src')
    }
  },
  // vite 相关配置
  server: {
    port: 8084,
    host: true,
    open: false,
    proxy: {
      '/appapi': {
        target: 'http://10.23.5.150:8082',
        changeOrigin: true,
        rewrite: (p: string) => p.replace(/^\/appapi/, '')
      }
    }
  },
})
