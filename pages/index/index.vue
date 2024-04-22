<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="2000"  circular autoplay 
			indicator-color="#c0c0c0" indicator-active-color="#fff">
				<swiper-item >
					<image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item >
					<image src="../../common/images/banner2.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item >
					<image src="../../common/images/banner3.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text>
					公告
				</text>
			</view>
			<view class="center">
				<swiper   autoplay  :interval="1500" :duration="1500" circular vertical>
					<swiper-item>
						公告1111
					</swiper-item>
					<swiper-item>
						哈哈哈呵呵呵嘻嘻嘻咩咩咩啊啊啊哼哼哼哦哦哦啦啦啦
					</swiper-item>
					<swiper-item>
						Attention 2222222
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped >
	
	.homeLayout{
		.banner{
			width: 750rpx;
			height: 340rpx;
			swiper{
				height: 100%;
				width: 100%;
				swiper-item{
					height: 100%;
					width: 100%;
					padding: 0 30rpx;
					image{
						height: 100%;
						width: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		.notice{
			width: 750rpx;
			height: 34rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.center{
				flex:1;
				height: 100%;
				swiper{
					height: 100%;
					swiper-item{
						height: 100%;
						font-size: 30rpx;
						color:#666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.right{
				width: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		
	}
	
</style>
