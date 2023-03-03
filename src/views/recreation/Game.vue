<template>
	<div class="game">
		<one-main-content :urlContent="recGame" />
	</div>
</template>

<script setup>
	import OneMainContent from "@/components/OneMainContent.vue"
	import recGame from "@/utils/recreation/game.js"

	defineOptions({
		name: "game",
	})
</script>

<style lang="less" scoped>
	.game {
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
