<template>
	<view class="homeLayout pageBg">
		
		<custom-nav-bar title="推荐"></custom-nav-bar>
		
		
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="2000"  circular autoplay 
			indicator-color="#c0c0c0" indicator-active-color="#fff">
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
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
				<swiper autoplay :interval="1500" :duration="1500" circular vertical>
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator url="/pages/notice/detail">
							{{ item.title }}
						</navigator>
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
						<uni-icons type="calendar" size="18"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">				
				<scroll-view scroll-x>
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<common-title>
				<template #name>主题</template>
				<template #custom>
					<navigator url="/pages/classify/classify" open-type="reLaunch" class="more">MORE+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item  v-for="item in classifyList" :item="item" :key="item._id"></theme-item>
				<theme-item  :isMore="true"></theme-item>
			</view>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {apiGetBanner,apiGetDayRandom,apiGetNotice,apiGetClassify} from "@/api/apis.js";


const goPreview = ()=>{
	uni.navigateTo({
		url: "/pages/preview/preview"
	})
}
	

const bannerList= ref([]);
const randomList = ref([]);
const noticeList = ref([]);
const classifyList = ref([]);

const getBanner = async ()=>{
	let res =await apiGetBanner();	
	bannerList.value = res.data;	
}

const getDayRandom = async ()=>{
	let res =await apiGetDayRandom();
	randomList.value = res.data	
}

const getNotice = async()=>{
	let res =await apiGetNotice({select:true});
	noticeList.value = res.data
}

const getClassify =async()=>{
	let res =await apiGetClassify({
		select:true
	});
	classifyList.value = res.data
	console.log(res);
}

getBanner();
getDayRandom();
getNotice();
getClassify();
</script>

<style lang="scss" scoped >
	
	.homeLayout{
		.banner{
			width: 750rpx;
			height: 340rpx;
			padding: 50rpx 0 0 0;
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
			margin: 15rpx auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important;
					}
				}			
				text{
					color: $brand-theme-color;
					font-weight: 600;
					font-size: 28rpx;
				}
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
				:deep(){
					.uni-icons{
						color:$brand-theme-color !important;
					}
				}
				.text{
					margin-left: 5px;
					color: $brand-theme-color;
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
				color: $brand-theme-color;
				font-size: 20rpx;
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
