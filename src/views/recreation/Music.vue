<template>
	<div class="music">
		<one-main-content :urlContent="recMusic" />
	</div>
</template>

<script setup>
	import OneMainContent from "@/components/OneMainContent.vue"
	import recMusic from "@/utils/recreation/music.js"

	defineOptions({
		name: "music",
	})
</script>

<style lang="less" scoped>
	.music {
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
