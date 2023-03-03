<template>
	<div class="online">
		<one-main-content :urlContent="tvOnline" />
	</div>
</template>

<script setup>
	import OneMainContent from "@/components/OneMainContent.vue"
	import tvOnline from "@/utils/tv/online.js"

	defineOptions({
		name: "tv-online",
	})
</script>

<style lang="less" scoped>
	.online {
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
