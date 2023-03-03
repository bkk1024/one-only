import { createRouter, createWebHashHistory } from "vue-router"
import { start, close } from '@/utils/nprogress.js' // 导入进度条

const views = import.meta.glob("../views/**/*.vue") // 将 views 目录下的所有 .vue 文件导入进来

const routes = [
  {
    path: "/",
    redirect: "/tv/online",
  },
  // 影视
  {
    path: "/tv",
    name: "tv",
    meta: {
      title: "影视",
    },
    children: [
      {
        path: "online",
        name: "tv-online",
        component: views["../views/tv/Online.vue"],
        meta: {
          title: "在线观看",
        },
      },
      {
        path: "download",
        name: "tv-download",
        component: views["../views/tv/Download.vue"],
        meta: {
          title: "资源下载",
        },
      },
    ],
  },
  // 音乐
  {
    path: "/music",
    name: "music",
    meta: {
      title: "音乐",
    },
    children: [
      {
        path: "web",
        name: "music-web",
        component: views["../views/music/Web.vue"],
        meta: {
          title: "音乐网站",
        },
      },
    ],
  },
  // 书籍
  {
    path: "/book",
    name: "book",
    meta: {
      title: "书籍",
    },
    children: [
      {
        path: "free",
        name: "book-free",
        component: views["../views/book/Free.vue"],
        meta: {
          title: "免费看书",
        },
      },
    ],
  },
  // 娱乐
  {
    path: "/recreation",
    name: "recreation",
    meta: {
      title: "娱乐",
    },
    children: [
      {
        path: "game",
        name: "recreation-game",
        component: views["../views/recreation/Game.vue"],
        meta: {
          title: "游戏网站",
        },
      },
      {
        path: "music",
        name: "recreation-music",
        component: views["../views/recreation/Music.vue"],
        meta: {
          title: "音乐网站",
        },
      },
    ],
  },
  // 其他导航网站
  {
    path: "/othernavs",
    name: "other-navs",
    component: views["../views/nav/Others.vue"],
    meta: {
      title: "其他导航",
    },
  },
]

// 这个路由里面存放我自己的一些网站
const routeMy = {
  path: "/my",
  name: "my",
  component: views["../views/My.vue"],
  meta: {
    title: "我的",
  },
}

// 这个是404页面，将其放在路由最后
const route404 = {
  path: "/:pathMatch(.*)*",
  name: "404",
  component: views["../views/404.vue"],
  meta: {
    title: "页面未找到",
  },
}

routes.push(routeMy, route404)

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // 禁用浏览器前进后退按钮，另一部分在 main 中
  // scrollBehavior: () => {
  //   history.pushState(null, null, document.URL)
  // },
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  start() // 进度条开始
  // document.title = 'one-only | 一个资源导航网站'
  document.title = to.meta.title
  next()
})

// 全局后置路由守卫
router.afterEach(() => {
  close() // 进度条结束
})

export default router
