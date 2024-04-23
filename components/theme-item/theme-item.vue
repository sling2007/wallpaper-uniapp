<template>
	<view class="themeItem">
		<navigator url="" class="box" v-if="!isMore">
			<image class="pic" mode="aspectFill" src="../../common/images/classify1.jpg"></image>
			<view class="mask">美女照片</view>
			<view class="tab">3 天前更新</view>
		</navigator>
		<navigator url="" class="box more" v-if="isMore">
			<image class="pic" mode="aspectFill" src="../../common/images/classify2.jpg"></image>
			<view class="mask">
				<uni-icons  type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">更多</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
defineProps({
	isMore:{
		type: Boolean,
		default: false
	}
})
</script>

<style lang="scss" scoped>
	.themeItem{
		.box{
			height: 340rpx;
			border-radius: 10rpx;
			overflow:hidden;
			position: relative;
			.pic{
				width: 100%;
				height: 100%;
			}
			.mask{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 70rpx;
				background: rgba(0,0,0,0.2);
				color:#fff;
				display: flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(20rpx);
				font-weight: 600;
				font-size: 30rpx;
			}
			.tab{
				height: 30rpx;
				// width: 200rpx;
				position: absolute;
				top: 0;
				left: 0;
				background: rgba(250,129,90,0.7);
				backdrop-filter: blur(20rpx);
				color:#fff;
				font-size: 22rpx;
				padding:6rpx 14rpx;
				border-radius: 0 0 10rpx 0;
				transform: scale(0.8);
				transform-origin: left top;
			}
		}
	
		.box.more{	
			.mask{
				height: 100%;
				flex-direction: column;
			}
			.text{
				font-size: 28rpx;
			}
		}
	}
	
	
	

</style>