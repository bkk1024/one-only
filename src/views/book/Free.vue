<template>
	<div class="free">
		<one-main-content :urlContent="bookFree" />
	</div>
</template>

<script setup>
	import OneMainContent from "@/components/OneMainContent.vue"
	import bookFree from "@/utils/book/free.js"

	defineOptions({
		name: "free",
	})
</script>

<style lang="less" scoped>
	.free {
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
