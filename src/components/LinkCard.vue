<template>
	<div class="link-card" @click="gotoUrl">
		<h4 class="ptAbs name">{{ name }}</h4>
		<p class="ptAbs tip" v-if="tip">{{ tip }}</p>
		<div class="ptAbs btn-area">
			<span @click="gotoUrl">
				链接直达
				<svg-icon name="gotoLink" :size="17" />
			</span>
			<span @click="showORcode" @mouseenter="showORcode = true" @mouseleave="showORcode = false">
				手机查看
				<svg-icon name="scanQR" :size="17" />
				<Transition>
					<div class="ptAbs QRcode" v-if="showORcode">
						<span class="ptAbs hCenter"></span>
						<!-- 二维码 -->
						<qrcode-vue class="ptAbs Center" :value="url" :size="105" level="H" background="#00b294" foreground="#fff" />
					</div>
				</Transition>
			</span>
		</div>
		<!-- 蒙层 -->
		<div class="ptAbs mask" v-if="!able">
			<svg-icon name="linkLose" :size="40" />
			链接暂时失效
		</div>
		<!-- 网站图标 -->
		<div class="ptAbs link-img">
			<img :src="img" alt="" />
		</div>
	</div>
</template>

<script setup>
	import QrcodeVue from "qrcode.vue"

	defineOptions({
		name: "LinkCard",
	})

	const props = defineProps({
		name: {
			type: String,
			default: "",
		},
		url: {
			type: String,
			default: "",
		},
		img: {
			type: String,
			default: "",
		},
		// 链接是否有效
		able: {
			type: Boolean,
			default: true,
		},
		// 说明
		tip: {
			type: String,
			default: "",
		},
	})

	const gotoUrl = () => {
		if (!props.able) return false
		window.open(props.url)
	}

	// 控制二维码的显隐
	const showORcode = ref(false)
</script>

<style lang="less" scoped>
	.link-card {
		position: relative;
		display: inline-block;
		width: 200px;
		height: 70px;
		margin-left: 30px;
		margin-top: 20px;
		border-radius: 5px;
		background-color: #f5f6fa;
		cursor: pointer;
		transition: all 0.3s linear;

		&:hover {
			transform: translateY(-5px);
			box-shadow: 2px 2px 5px #95a5a6;
			transition: all 0.3s linear;
			z-index: 1;
		}

		.link-img {
			display: inline-block;
			width: 50px;
			height: 50px;
			left: -10px;
			top: -10px;
			border-radius: 5px;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.name {
			display: inline-block;
			left: 50px;
			top: 5px;
			max-width: 140px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.tip {
			top: 28px;
			left: 50px;
			font-size: 12px;
			color: #aaa69d;
			max-width: 140px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.btn-area {
			display: flex;
			justify-content: space-between;
			bottom: 0px;
			right: 10px;
			width: 140px;
			height: 30px;

			span {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 65px;
				height: 100%;
				font-size: 12px;
				transition: all 0.3s linear;

				&:hover {
					color: #ff6348;
					transition: all 0.3s linear;
				}

				.QRcode {
					display: flex;
					justify-content: center;
					width: 120px;
					height: 120px;
					top: 40px;
					background-color: #00b294;
					user-select: none;
					pointer-events: none;

					span {
						box-sizing: border-box;
						width: 10px;
						height: 10px;
						border: 10px solid transparent;
						border-bottom-color: #00b294;
						transform: translateY(-19px);
					}
				}
			}
		}

		.mask {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 100%;
			padding-left: 45px;
			padding-right: 10px;
			color: #000;
			font-weight: 700;
			border-radius: 5px;
			border: 1px solid #000;
			background-color: rgba(255, 255, 255, 0.7);
			user-select: none;
			cursor: pointer;
		}
	}
</style>

<style lang="less" scoped>
	.v-enter-active {
		transition: all 0.3s linear;
	}

	.v-leave-active {
		transition: all 0.3s linear;
	}

	.v-enter-from,
	.v-leave-to {
		transform: translateY(-20px);
		opacity: 0;
	}
</style>
