/* 这个文件是 nprogress 的配置 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局进度条配置
NProgress.configure({
  easing: "ease",
  speed: 1000, // 递增进度条的速度
  showSpinner: false, // 是否显示加载 ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时最小百分比
})

// 打开进度条
export const start = () => {
  NProgress.start()
}

// 关闭进度条
export const close = () => {
  NProgress.done()
}