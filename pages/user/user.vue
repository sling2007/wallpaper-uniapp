<template>
	<view class="userLayout pageBg">
		
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">100.100.100.100</view>
			<view class="address">山东</view>
		</view>
			
		<view class="section">
			<view class="list">
				<navigator url="/pages/classlist/classlist" >
					<view class="row">
						<view class="left">
							<uni-icons type="download-filled" size="20"  ></uni-icons>
							<view class="text">我的下载</view>
						</view>
						<view class="right">
							<view class="text">666</view>
							<uni-icons type="right" size="15" ></uni-icons>
						</view>
					</view>
				</navigator>
				
				<navigator url="/pages/classlist/classlist" >
					<view  class="row">
						<view class="left">
							<uni-icons type="star-filled" size="20" ></uni-icons>
							<view class="text">我的评分</view>
						</view>
						<view class="right">
							<view class="text">888</view>
							<uni-icons type="right" size="15" ></uni-icons>
						</view>
					</view>
				</navigator>
				
				
				<view  class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20"  ></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15" ></uni-icons>
					</view>
					<!-- #ifdef MP -->
					<button type="contact">小程序联系客服</button>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<button @click="clickContact">拨打电话</button>
					<!-- #endif -->
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view  class="row">
					<view class="left">
						<uni-icons type="notification-filled" size="20" ></uni-icons>
						<view class="text">订阅更新</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15"></uni-icons>
					</view>
				</view>
				
				<view  class="row">
					<view class="left">
						<uni-icons type="flag-filled" size="20" ></uni-icons>
						<view class="text">常见问题</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const clickContact = ()=>{
		uni.makePhoneCall({
			phoneNumber:"10086"
		})
	}
	
</script>

<style lang="scss" scoped>
.userLayout{
	margin: 50rpx auto;
	
	.userInfo{
		width: 690rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding:50rpx 0;
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			font-size: 44rpx;
			color:#333;
			padding:20rpx 0 5rpx;
		}
		.address{
			font-size: 28rpx;
			color:#aaa;
		}
		
		
	}
	
	.section{
		width: 690rpx;
		border: 1px solid #aaa;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
		margin: 50rpx auto;
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding:0 30rpx;
				height: 100rpx;
				border-bottom: 1px solid #eee;
				position: relative;
				//background: #fff;
				&:last-child{
					border-bottom:0
				}
				.left{
					display: flex;
					align-items: center;
					.text{
						padding-left: 20rpx;
						color:#666
					}
					:deep(){
						.uni-icons{
							color:$brand-theme-color !important;
						}
					}	
				}
				.right{
					display: flex;
					align-items: center;
					.text{
						font-size: 28rpx;
						color:$text-font-color-5;
					}
					:deep(){
						.uni-icons{
							color:$text-font-color-5 !important;
						}
					}	
				}
				button{
					position: absolute;
					opacity: 0;
					top: 0;
					right: 0;
					height: 100%;
					width: 100%;
				}
			}
			
		}
	}
	
}


</style>

