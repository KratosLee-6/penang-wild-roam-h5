<template>
  <View class="page">
    <View :class="['detail-hero', food?.coverGradient]">
      <View class="hero-back" @click="goBack">
        <Text class="back-arrow">←</Text>
      </View>
      <View class="hero-title-wrap">
        <Text class="hero-title">{{ food?.title }}</Text>
        <Text class="hero-sub">{{ food?.subtitle }}</Text>
      </View>
    </View>
    <ScrollView class="content" scroll-y>
      <View class="section">
        <Text class="section-title">介绍</Text>
        <Text class="section-text">{{ food?.description }}</Text>
      </View>
      <View class="info-grid">
        <View class="info-item" v-if="food?.address">
          <Text class="info-label">📍 地址</Text>
          <Text class="info-value">{{ food.address }}</Text>
        </View>
        <View class="info-item" v-if="food?.hours">
          <Text class="info-label">⏰ 营业时间</Text>
          <Text class="info-value">{{ food.hours }}</Text>
        </View>
        <View class="info-item" v-if="food?.price">
          <Text class="info-label">💰 人均</Text>
          <Text class="info-value">{{ food.price }}</Text>
        </View>
      </View>
      <View class="section" v-if="food?.mustTry?.length">
        <Text class="section-title">必点推荐</Text>
        <View class="list">
          <Text v-for="(m, i) in food.mustTry" :key="i" class="list-item">· {{ m }}</Text>
        </View>
      </View>
      <View class="section" v-if="food?.tips?.length">
        <Text class="section-title">温馨提示</Text>
        <View class="list">
          <Text v-for="(t, i) in food.tips" :key="i" class="list-item">· {{ t }}</Text>
        </View>
      </View>
      <View class="bottom-spacer" />
    </ScrollView>
    <View class="action-bar">
      <View class="action-btn" @click="toggleLike">
        <Text class="action-icon">{{ liked ? '❤️' : '🤍' }}</Text>
        <Text class="action-text">{{ liked ? '已点赞' : '点赞' }}</Text>
      </View>
      <View class="action-btn" @click="share">
        <Text class="action-icon">↗</Text>
        <Text class="action-text">分享</Text>
      </View>
    </View>
  </View>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store/user'
import type { Food } from '@/services/content'

const food = ref<Food | null>(null)
const liked = ref(false)
const userStore = useUserStore()

onMounted(() => {
  food.value = Taro.getStorageSync('curFood') || null
  if (food.value) liked.value = userStore.isLiked(food.value.id)
  if (typeof Taro.showShareMenu === 'function') Taro.showShareMenu()
})

function goBack() { Taro.navigateBack() }
function toggleLike() {
  if (!food.value) return
  userStore.toggleLike(food.value.id)
  liked.value = userStore.isLiked(food.value.id)
  Taro.showToast({ title: liked.value ? '已点赞' : '取消点赞', icon: 'success' })
}
function share() { Taro.showToast({ title: '点击右上角分享', icon: 'none' }) }
</script>

<style scoped>
.page { min-height: 100vh; background: #faf8f5; }
.detail-hero { height: 360rpx; position: relative; display: flex; align-items: flex-end; padding: 24rpx; }
.from-ocean\/60 { background: linear-gradient(135deg, #3b829e, #1a4a3a); }
.from-sand-dark\/60 { background: linear-gradient(135deg, #c4a882, #8b6f47); }
.from-coral\/60 { background: linear-gradient(135deg, #e07a5f, #c4624a); }
.from-forest\/60 { background: linear-gradient(135deg, #518c6e, #1a3a2a); }
.hero-back { position: absolute; top: 24rpx; left: 24rpx; width: 64rpx; height: 64rpx; background: rgba(0,0,0,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.back-arrow { color: #fff; font-size: 32rpx; }
.hero-title-wrap { position: relative; z-index: 1; }
.hero-title { display: block; font-size: 48rpx; font-weight: 700; color: #fff; text-shadow: 0 2rpx 10rpx rgba(0,0,0,0.3); }
.hero-sub { display: block; font-size: 24rpx; color: rgba(255,255,255,0.8); margin-top: 8rpx; }
.content { height: calc(100vh - 360rpx - 120rpx); padding: 24rpx; }
.section { margin-bottom: 32rpx; }
.section-title { display: block; font-size: 32rpx; font-weight: 600; color: #1a1a1a; margin-bottom: 16rpx; }
.section-text { display: block; font-size: 28rpx; color: #666; line-height: 1.8; }
.info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20rpx; margin-bottom: 32rpx; }
.info-item { background: #fff; border-radius: 16rpx; padding: 20rpx; }
.info-label { display: block; font-size: 22rpx; color: #999; margin-bottom: 8rpx; }
.info-value { display: block; font-size: 26rpx; color: #1a1a1a; }
.list { background: #fff; border-radius: 16rpx; padding: 20rpx; }
.list-item { display: block; font-size: 26rpx; color: #555; line-height: 1.8; margin-bottom: 8rpx; }
.bottom-spacer { height: 40rpx; }
.action-bar { position: fixed; bottom: 0; left: 0; right: 0; height: 120rpx; background: #fff; border-top: 1rpx solid #eee; display: flex; align-items: center; justify-content: center; gap: 80rpx; padding-bottom: env(safe-area-inset-bottom); }
.action-btn { display: flex; flex-direction: column; align-items: center; gap: 4rpx; }
.action-icon { font-size: 40rpx; }
.action-text { font-size: 22rpx; color: #666; }
</style>
