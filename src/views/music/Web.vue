<template>
	<div class="web">
		<one-main-content :urlContent="musicWeb" />
	</div>
</template>

<script setup>
	import OneMainContent from "@/components/OneMainContent.vue"
	import musicWeb from "@/utils/music/web.js"

	defineOptions({
		name: "MusicWeb",
	})
</script>

<style lang="less" scoped>
	.web {
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
