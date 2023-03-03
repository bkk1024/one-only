/* vite 公用配置 */

import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import DefineOptions from "unplugin-vue-define-options/vite"
import postcssPresetEnv from "postcss-preset-env"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

export default defineConfig({
	resolve: {
		alias: {
			// 配置 src 目录别名
			"@": path.resolve(__dirname, "./src"),
		},
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
	],
	// 配置 postcss
	postcss: {
		plugins: [
			// postcss 的预设环境，支持 css 变量和一些未来的 css 语法，以及 css 兼容性自动补全等
			postcssPresetEnv(),
		],
	},
})
