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
		
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18" color="green"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">				
				<scroll-view scroll-x>
					<view class="box" v-for="item in 8">
						<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<common-title>
				<template #name>主题</template>
				<template #custom>
					<navigator url="" open-type="reLaunch" class="more">MORE</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item  v-for="item in 8"></theme-item>
				<theme-item  :isMore="true"></theme-item>
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
		
		.select{
			width: 750rpx;
			.date{
				display: flex;
				align-items: center;
				color: seagreen;
				.text{
					margin-left: 5px;
				}
			}
			
			.content{
				width: 720rpx;
				height: 430rpx;
				padding: 0 30rpx;
				scroll-view{
					width: 690rpx;
					height: 100%;
					white-space: nowrap;
					.box{
						height: 100%;
						width: 200rpx;
						display: inline-block;
						margin-right: 15rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
					.box:last-child{
						margin-right: 0rpx;
					}
				}
			}
		}
	
		.theme{
			width: 750rpx;
			padding: 50rpx 0;
			.more{
				display: flex;
				align-items: center;
				color: seagreen;
				font-size: 18rpx;
			}
			.content{
				margin-top:30rpx;
				padding:0 30rpx;
				display: grid;
				gap:15rpx;
				grid-template-columns: repeat(3,1fr);
			}
		}
	}
	
</style>
