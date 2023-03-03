<template>
	<div class="others">
		<one-main-content :urlContent="otherWebs" />
	</div>
</template>

<script setup>
	import OneMainContent from "@/components/OneMainContent.vue"
	import otherWebs from "@/utils/nav/others.js"

	defineOptions({
		name: "others",
	})
</script>

<style lang="less" scoped>
	.others {
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
