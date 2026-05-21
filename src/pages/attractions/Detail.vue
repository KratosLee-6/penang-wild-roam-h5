<template>
  <View class="page">
    <!-- Hero header -->
    <View :class="['detail-hero', attraction?.coverGradient]">
      <View class="hero-back" @click="goBack">
        <Text class="back-arrow">←</Text>
      </View>
      <View class="hero-title-wrap">
        <Text class="hero-title">{{ attraction?.title }}</Text>
        <Text class="hero-sub">{{ attraction?.subtitle }}</Text>
      </View>
    </View>

    <ScrollView class="content" scroll-y>
      <!-- Description -->
      <View class="section">
        <Text class="section-title">介绍</Text>
        <Text class="section-text">{{ attraction?.description }}</Text>
      </View>

      <!-- Info grid -->
      <View class="info-grid">
        <View class="info-item" v-if="attraction?.location">
          <Text class="info-label">📍 地点</Text>
          <Text class="info-value">{{ attraction.location }}</Text>
        </View>
        <View class="info-item" v-if="attraction?.hours">
          <Text class="info-label">⏰ 时间</Text>
          <Text class="info-value">{{ attraction.hours }}</Text>
        </View>
        <View class="info-item" v-if="attraction?.price">
          <Text class="info-label">💰 费用</Text>
          <Text class="info-value">{{ attraction.price }}</Text>
        </View>
        <View class="info-item" v-if="attraction?.transport">
          <Text class="info-label">🚇 交通</Text>
          <Text class="info-value">{{ attraction.transport }}</Text>
        </View>
      </View>

      <!-- Highlights -->
      <View class="section" v-if="attraction?.highlights?.length">
        <Text class="section-title">✨ 亮点</Text>
        <View class="list">
          <Text v-for="(h, i) in attraction.highlights" :key="i" class="list-item">· {{ h }}</Text>
        </View>
      </View>

      <!-- Tips -->
      <View class="section" v-if="attraction?.tips?.length">
        <Text class="section-title">⚠️ 提示</Text>
        <View class="list">
          <Text v-for="(t, i) in attraction.tips" :key="i" class="list-item">· {{ t }}</Text>
        </View>
      </View>

      <View class="bottom-spacer" />
    </ScrollView>

    <!-- Bottom action bar -->
    <View class="action-bar">
      <View class="action-btn" @click="toggleLike">
        <Text class="action-icon">{{ liked ? '❤️' : '🤍' }}</Text>
        <Text class="action-text">{{ liked ? '已点赞' : '点赞' }}</Text>
      </View>
      <View class="action-btn" @click="share">
        <Text class="action-icon">� share</Text>
        <Text class="action-text">分享</Text>
      </View>
    </View>
  </View>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store/user'
import type { Attraction } from '@/services/content'

const attraction = ref<Attraction | null>(null)
const liked = ref(false)
const userStore = useUserStore()

onMounted(() => {
  attraction.value = Taro.getStorageSync('curAttraction') || null
  if (attraction.value) {
    liked.value = userStore.isLiked(attraction.value.id)
  }
  // Enable share
  if (typeof Taro.showShareMenu === 'function') {
    Taro.showShareMenu()
  }
})

function goBack() {
  Taro.navigateBack()
}

function toggleLike() {
  if (!attraction.value) return
  userStore.toggleLike(attraction.value.id)
  liked.value = userStore.isLiked(attraction.value.id)
  Taro.showToast({ title: liked.value ? '已点赞' : '取消点赞', icon: 'success' })
}

function share() {
  Taro.showToast({ title: '点击右上角分享', icon: 'none' })
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #faf8f5;
}

.detail-hero {
  height: 400rpx;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 24rpx;
}

.from-ocean\/50 { background: linear-gradient(135deg, #3b829e, #2d6a8f); }
.from-forest\/50 { background: linear-gradient(135deg, #518c6e, #3d7058); }
.from-coral\/50 { background: linear-gradient(135deg, #e07a5f, #c4624a); }
.from-ocean\/60 { background: linear-gradient(135deg, #3b829e, #1a4a3a); }
.from-forest\/60 { background: linear-gradient(135deg, #518c6e, #1a3a2a); }
.from-forest\/80 { background: linear-gradient(135deg, #518c6e, #2d6a8f); }

.hero-back {
  position: absolute;
  top: 24rpx;
  left: 24rpx;
  width: 64rpx;
  height: 64rpx;
  background: rgba(0,0,0,0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-arrow {
  color: #fff;
  font-size: 32rpx;
}

.hero-title-wrap {
  position: relative;
  z-index: 1;
}

.hero-title {
  display: block;
  font-size: 48rpx;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2rpx 10rpx rgba(0,0,0,0.3);
}

.hero-sub {
  display: block;
  font-size: 24rpx;
  color: rgba(255,255,255,0.8);
  margin-top: 8rpx;
}

.content {
  height: calc(100vh - 400rpx - 120rpx);
  padding: 24rpx;
}

.section {
  margin-bottom: 32rpx;
}

.section-title {
  display: block;
  font-size: 32rpx;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16rpx;
}

.section-text {
  display: block;
  font-size: 28rpx;
  color: #666;
  line-height: 1.8;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  margin-bottom: 32rpx;
}

.info-item {
  background: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
}

.info-label {
  display: block;
  font-size: 22rpx;
  color: #999;
  margin-bottom: 8rpx;
}

.info-value {
  display: block;
  font-size: 26rpx;
  color: #1a1a1a;
}

.list {
  background: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
}

.list-item {
  display: block;
  font-size: 26rpx;
  color: #555;
  line-height: 1.8;
  margin-bottom: 8rpx;
}

.bottom-spacer {
  height: 40rpx;
}

.action-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  background: #fff;
  border-top: 1rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80rpx;
  padding-bottom: env(safe-area-inset-bottom);
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rpx;
}

.action-icon {
  font-size: 40rpx;
}

.action-text {
  font-size: 22rpx;
  color: #666;
}
</style>
