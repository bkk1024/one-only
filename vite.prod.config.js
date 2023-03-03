/* vite 生产配置 */

import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import DefineOptions from "unplugin-vue-define-options/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  // 配置打包文件读取路径，这里是相对路径。也可以使用 '/' 即为绝对路径，或者使用网络路径也行
  base: "./",
  build: {
    rollupOptions: {
      output: {
        // 分包
        manualChunks: id => {
          // console.log("id", id)
          if (id.includes("element-plus")) {
            return "elementplus"
          }
          if (id.includes("qrcode")) {
            return "qrcode"
          }
          if (id.includes("node_modules")) {
            return "vendor"
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // 去掉 console.log
        drop_debugger: true, // 去掉 debugger
      },
    },
    cssCodeSplit: true, // 对 css 进行拆分
    sourcemap: false, // 打包不生成 sourcemap 文件
    assetsInlineLimit: 5000, // 小于该值的图片将被打包成 base64
  },
  plugins: [
    vue(),
    // 配置 defineOptions
    DefineOptions(),
    // 自动导入和注册
    AutoImport({
      resolvers: [
        // 自动导入 element-plus
        ElementPlusResolver(),
        // 自动导入突变组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      // 自动导入 vue 的函数
      imports: ["vue"],
    }),
    Components({
      resolvers: [
        // 自动注册element-plus组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "./src/icons")],
      symbolId: "i-[name]",
      customDomId: "__svg__icons__dom__",
    }),
    visualizer({
      open: true
    })
  ],
})
