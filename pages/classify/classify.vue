<template>
	
	<view class="classifyPage pageBg">
		
		<view class="classify">
			<theme-item  v-for="item in 16"></theme-item>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>

	.classify{
		width: 750rpx;
		padding: 50rpx 0;
		margin:30rpx;
		display: grid;
		gap:15rpx;
		grid-template-columns: repeat(3,1fr);
	
	}
</style>
