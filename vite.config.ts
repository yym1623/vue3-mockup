import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath, URL } from 'node:url';
// import fs from "fs";
import eslintPlugin from 'vite-plugin-eslint';

// SSL 인증서 적용
// const https = {
//   key: fs.readFileSync("./ssl/star_etaas_co_kr_NginX_nopass_key.pem"),
//   cert: fs.readFileSync("./ssl/star_etaas_co_kr_NginX_cert.pem")
// };


export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    Components(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: true,
      eslintrc: {
        enabled: false,
        globalsPropValue: true,
      },
    }),
  ],
  // server: {},
  // build: {},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@': path.resolve(__dirname,'./src'),
    },
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.vue'],
  }
})

