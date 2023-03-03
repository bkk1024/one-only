<template>
	<div class="my">
		<one-main-content :urlContent="myWeb" />
	</div>
</template>

<script setup>
	import OneMainContent from "@/components/OneMainContent.vue"
	import myWeb from "@/utils/my.js"

	defineOptions({
		name: "my",
	})
</script>

<style lang="less" scoped>
	.my {
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
