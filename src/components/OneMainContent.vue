<!-- 每个菜单路由的页面主体 -->
<template>
	<div class="one-main-content">
		<el-scrollbar ref="scrollbarRef" @scroll="scroll">
			<div v-for="(item, index) in urlContent" class="box">
				<h3 :id="`id_${index}`">{{ item.name }}</h3>
				<div>
					<link-card v-for="content in item.content" :name="content.name" :url="content.url" :img="content.img" :able="content.able" :tip="content.tip" />
				</div>
			</div>
			<!-- 这是一个垫片，防止最下方的卡片的二维码无法展示 -->
			<div class="block"></div>
		</el-scrollbar>
		<div class="nav">
			<span v-for="(item, index) in urlContent" @click="gotoId(`id_${index}`)">{{ item.name }}</span>
		</div>
	</div>
</template>

<script setup>
	import LinkCard from "@/components/LinkCard.vue"
	import debounce from "lodash/debounce"
	import { onActivated } from "vue"
	import { useLayoutStore } from "@/stores/layout.js"

	defineOptions({
		name: "OneMainContent",
	})

	const props = defineProps({
		urlContent: {
			type: Array,
			default() {
				return []
			},
		},
	})

	const localStore = useLayoutStore()

	// el-scrollbar 锚点跳转
	const scrollbarRef = ref(null)
	const gotoId = (id) => {
		let whichId = document.getElementById(id)
		scrollbarRef.value.scrollTo({ top: whichId.offsetTop, behavior: "smooth" })
	}

	// 获取当前活跃组件 index
	const getNowIndex = () => {
		let index = 0
		const { tags } = localStore
		const length = tags.length
		for (let i = 0; i < length; i++) {
			if (tags[i].active) {
				index = i
				break
			}
		}
		return index
	}

	let nowIndex = 0

	const scroll = debounce(({ scrollLeft, scrollTop }) => {
		// 保存本页面滚动条位置
		const { tags } = localStore
		tags[nowIndex].top = scrollTop || 0
	}, 500)

	onActivated(() => {
		// 页面展示时，定位到上次浏览的地方
		nowIndex = getNowIndex()
		const { tags } = localStore
		scrollbarRef.value.setScrollTop(tags[nowIndex].top || 0)
	})
</script>

<style lang="less" scoped>
	.one-main-content {
		position: relative;
		width: 100%;
		height: 100%;

		h3 {
			display: inline-block;
			padding: 5px 15px;
			margin-bottom: 10px;
			border-radius: 25px;
			color: #fff;
			background-color: #0078d4;
			user-select: none;
		}

		:deep(.el-scrollbar) {
			width: calc(100% - 170px);
		}

		.nav {
			position: absolute;
			top: 0;
			right: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 10px 10px;
			border-radius: 5px;
			border: 1px solid #dee2e6;
			box-shadow: 0 0 10px #dee2e6;

			span {
				position: relative;
				width: 100px;
				height: 30px;
				padding: 5px;
				text-align: center;
				line-height: 30px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				cursor: pointer;

				&:hover {
					color: #fd7e14;
				}
			}
		}

		.box {
			margin-bottom: 20px;
		}

		.block {
			height: 200px;
		}
	}
</style>
