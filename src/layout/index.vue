<template>
	<div class="layout">
		<el-container>
			<!-- 头部 -->
			<el-header>
				<el-card shadow="always">
					<span class="logo">
						<svg-icon name="logo" :size="40"></svg-icon>
						<h3>one-only</h3>
					</span>
				</el-card>
			</el-header>
			<el-container>
				<!-- 左侧导航 -->
				<el-aside width="200px">
					<el-card shadow="always">
						<el-scrollbar>
							<el-menu class="el-menu-vertical-demo" :unique-opened="true" :router="true" @select="gotoRoute">
								<!-- 一级菜单 -->
								<template v-for="route1 in routes">
									<el-sub-menu v-if="route1.children" :index="route1.path">
										<template #title>
											<svg-icon class="icon" :name="route1.name" :size="30"></svg-icon>
											<span>{{ route1.meta.title }}</span>
										</template>
										<!-- 二级菜单 -->
										<el-menu-item v-if="route1.children" v-for="route2 in route1.children" :index="route2.path">
											{{ route2.meta.title }}
										</el-menu-item>
									</el-sub-menu>
									<el-menu-item v-else :index="route1.path">
										<svg-icon class="icon" :name="route1.name" :size="30"></svg-icon>
										<span>{{ route1.meta.title }}</span>
									</el-menu-item>
								</template>
							</el-menu>
						</el-scrollbar>
					</el-card>
				</el-aside>
				<!-- 主体内容 -->
				<el-main>
					<!-- 标签卡区域 -->
					<div class="tags">
						<el-tag v-for="(tag, index) in layoutStore.tags" effect="dark" color="#78e08f" closable :class="{ 'tag-active': tag.active }" @close="closeTag(index)" @click="gotoTag(index)">
							{{ tag.name }}
						</el-tag>
					</div>
					<!-- 内容 -->
					<el-card shadow="always">
						<router-view v-slot="{ Component }">
							<transition>
								<keep-alive>
									<component class="ptAbs" :is="Component" :key="$route.fullPath" />
								</keep-alive>
							</transition>
						</router-view>
					</el-card>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup>
	import { useRouter } from "vue-router"
	import SvgIcon from "../components/SvgIcon.vue"
	import { useLayoutStore } from "@/stores/layout.js"

	defineOptions({
		name: "layout",
	})

	const router = useRouter()
	const layoutStore = useLayoutStore()

	const routes = router.options.routes.filter((item, index) => {
		if (index !== 0 && index !== router.options.routes.length - 1) return item
	})

	// 菜单的点击
	const gotoRoute = (index, indexPath, item, routeResult) => {
		const path = indexPath.reduce((total, cur) => {
			return total + "/" + cur
		})
		let target = routes.filter((item, index) => {
			if (item.path === indexPath[0]) {
				return item
			}
		})[0]
		let name = getRouteName(target, indexPath)
		addTag(name, path, true)
		router.replace(path)
	}

	const getRouteName = (route, indexPath) => {
		let name = route.meta.title
		if (route.children) {
			name +=
				"-" +
				route.children.filter((item, index) => {
					if (item.path === indexPath[1]) {
						return item
					}
				})[0].meta.title
		}
		return name
	}

	// 关闭标签卡
	const closeTag = (index) => {
		layoutStore.deleteTag(index)
		let len = layoutStore.tags.length
		for (let i = 0; i < len; i++) {
			if (layoutStore.tags[i].active) {
				router.replace(layoutStore.tags[i].path)
				break
			}
		}
		setSessionStorageTags(true)
	}

	// 添加标签卡
	const addTag = (name, path, active) => {
		let param = {
			name,
			path,
			active,
		}
		layoutStore.addTag(param)
		setSessionStorageTags(false)
	}

	// 点击标签卡
	const gotoTag = (index) => {
		router.replace(layoutStore.tags[index].path)
		layoutStore.setTagActive(index)
		setSessionStorageTags(false)
	}

	// 向浏览器的 sessionStorage 中存入本次使用的选项卡数据
	// 用以在用户刷新本窗口时保留本次使用的选项卡信息
	// isClose 表示是否为关闭选项卡的操作
	const setSessionStorageTags = (isClose) => {
		let tags = JSON.parse(sessionStorage.getItem("tags"))
		let lsTagsLen = layoutStore.tags.length
		if (tags) {
			let ssTagsLen = tags.length
			if (ssTagsLen > lsTagsLen && !isClose) {
				layoutStore.replaceTags(tags)
			}
			if (ssTagsLen === 1 && !isClose) {
				if (tags[0].name !== layoutStore.tags[0].name) {
					layoutStore.replaceTags(tags)
				}
			}
		}
		sessionStorage.setItem("tags", JSON.stringify(layoutStore.tags))
	}
	setSessionStorageTags(false)
</script>

<style lang="less" scoped>
	.layout {
		height: 100%;
	}

	:deep(.el-container) {
		height: 100%;
	}

	:deep(.el-header) {
		padding: 10px;
		height: 90px;

		.el-card {
			height: 100%;

			.el-card__body {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				height: 100%;
				padding: 10px 20px;

				.logo {
					display: flex;
					align-items: center;
					padding-right: 20px;
					border-right: 1px solid rgb(180, 168, 168);

					h3 {
						font-weight: 100;
						text-shadow: 2px 2px 2px #ff0000;
					}
				}
			}
		}
	}

	:deep(.el-aside) {
		padding: 10px;
		padding-top: 0;
		overflow: hidden;

		.el-menu {
			border-right: 0;
			font-weight: 700;
		}

		.el-card__body {
			height: 100%;
		}
	}

	@TagsHeight: 24px;
	@TagsMarginBottom: 5px;
	@TagsMarginTop: 10px;

	:deep(.el-main) {
		padding: 10px;
		padding-top: 0;
		padding-left: 0;
		overflow: hidden;

		.tags {
			display: flex;
			width: 100%;
			height: @TagsHeight;
			margin-bottom: @TagsMarginBottom;
			white-space: nowrap;
			// background-color: pink;

			.el-tag {
				position: relative;
				flex: 1;
				display: flex;
				justify-content: space-between;
				max-width: 115px;
				border: 0;
				margin-right: 5px;
				cursor: pointer;

				.el-tag__content {
					position: absolute;
					max-width: 80%;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}

				.el-tag__close {
					position: absolute;
					right: 5px;
				}
			}

			.tag-active {
				background-color: #20bf6b !important;
			}
		}

		.el-card {
			height: calc(100% - @TagsHeight - @TagsMarginBottom);
		}
	}
</style>

<style lang="less" scoped>
	.icon {
		margin-right: 10px;
	}

	span {
		user-select: none;
	}

	li {
		user-select: none;
	}

	:deep(.el-card) {
		position: relative;
		height: 100%;
	}

	.v-enter-active {
		transition: all 0.3s linear;
	}

	.v-leave-active {
		transition: all 0.3s linear;
	}

	.v-enter-from,
	.v-leave-to {
		transform: translateX(20px);
		opacity: 0;
	}
</style>
