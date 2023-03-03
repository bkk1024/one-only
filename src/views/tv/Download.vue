<template>
	<div class="download">
		<one-main-content :urlContent="tvDownload" />
	</div>
</template>

<script setup>
	import tvDownload from "@/utils/tv/download.js"
	import OneMainContent from "@/components/OneMainContent.vue"

	defineOptions({
		name: "tv-download",
	})
</script>

<style lang="less" scoped>
	.download {
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
