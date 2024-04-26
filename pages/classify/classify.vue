<template>
	
	<view class="classifyPage pageBg">
		<!-- #ifndef MP-TOUTIAO -->
		<custom-nav-bar title="分类"></custom-nav-bar>
		<!-- #endif -->
		
		<view class="classify">
			<theme-item v-for="item in classifyList" 
			:key="item._id"
			:item="item"
			></theme-item>
		</view>
		
	</view>
</template>

<script setup>
	
	import { ref } from 'vue';
	import {apiGetClassify} from "@/api/apis.js"
	const classifyList = ref([]);
	
	const getClassify =async()=>{
		let res =await apiGetClassify({
			pageSize:15
		});
		classifyList.value = res.data
		console.log(res);
	}
	
	
	getClassify();
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
