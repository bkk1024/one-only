import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "@/router/index.js"
import { createPinia } from "pinia"
// 导入雪碧图组件
import SvgIcon from "@/components/SvgIcon.vue"
import "virtual:svg-icons-register"

// 禁用浏览器前进后退，另一部分在 router 中
// window.addEventListener("popstate", function () {
// 	this.history.pushState(null, null, document.URL)
// })

const app = createApp(App)

app.component("SvgIcon", SvgIcon)

app.use(router).use(createPinia()).mount("#app")
