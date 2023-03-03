import { defineStore } from "pinia"

export const useLayoutStore = defineStore({
	id: "layout",
	state: () => {
		return {
			// 主体上面的标签卡
			tags: [
				{
					name: "影视-在线观看",
					path: "/tv/online",
					active: true,
				},
			],
		}
	},
	actions: {
		// 将 tags 的 active 全部置为 false
		resetTagsActive() {
			for (let i = 0, len = this.tags.length; i < len; i++) {
				this.tags[i].active = false
			}
		},
		// 添加标签卡
		addTag(param) {
			this.resetTagsActive()
			for (let i = 0, len = this.tags.length; i < len; i++) {
				if (this.tags[i].name === param.name) {
					this.tags[i].active = true
					return false
				}
			}
			this.tags.push(param)
		},
		// 删除标签卡
		deleteTag(index) {
			if (this.tags.length > 1) {
				// 获取当前显示的选项卡的 index
				let activeIndex = 0
				this.tags.forEach((item, tagindex) => {
					if (item.active) activeIndex = tagindex
				})
				// 删除的是显示的选项卡
				this.tags.splice(index, 1)
				if (index == activeIndex) {
					if (this.tags.length > index) {
						this.tags[index].active = true
					} else if (this.tags.length <= index) {
						this.tags[index - 1].active = true
					}
				}
			}
		},
		// 将某一个 tag 的 active 置为 true
		setTagActive(index) {
			this.resetTagsActive()
			this.tags[index].active = true
		},
		// 替换整个 tags
		replaceTags(value) {
			this.tags = value
		},
	},
	getters: {},
})
