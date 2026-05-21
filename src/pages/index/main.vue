<template>
  <View class="home">
    <!-- Full screen hero -->
    <View class="hero">
      <View class="hero-bg" />
      <View class="hero-overlay" />
      <View class="hero-content">
        <Text class="hero-title">槟城野生漫游</Text>
        <Text class="hero-subtitle">PENANG WILD ROAM</Text>
        <Text class="hero-desc">野是生活态度 · 食是城市灵魂</Text>
      </View>
    </View>

    <!-- Bottom entry cards -->
    <View class="entry-cards">
      <View
        class="entry-card card-attractions"
        @click="goTo('/pages/attractions/main')"
      >
        <Text class="card-emoji">🏖️</Text>
        <Text class="card-label">景点</Text>
        <Text class="card-sub">Attractions</Text>
      </View>
      <View
        class="entry-card card-food"
        @click="goTo('/pages/food/main')"
      >
        <Text class="card-emoji">🍜</Text>
        <Text class="card-label">美食</Text>
        <Text class="card-sub">Food</Text>
      </View>
      <View
        class="entry-card card-itinerary"
        @click="goTo('/pages/itinerary/main')"
      >
        <Text class="card-emoji">🗺️</Text>
        <Text class="card-label">行程</Text>
        <Text class="card-sub">Itinerary</Text>
      </View>
    </View>
  </View>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'

function goTo(url: string) {
  // @ts-ignore
  Taro.switchTab({ url })
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a1628;
  overflow: hidden;
}

.hero {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a3a5c 0%, #2d6a8f 40%, #1a4a3a 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 40rpx;
}

.hero-title {
  display: block;
  font-size: 64rpx;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 8rpx;
  margin-bottom: 16rpx;
  text-shadow: 0 4rpx 20rpx rgba(0,0,0,0.3);
}

.hero-subtitle {
  display: block;
  font-size: 28rpx;
  color: rgba(255,255,255,0.7);
  letter-spacing: 12rpx;
  margin-bottom: 24rpx;
}

.hero-desc {
  display: block;
  font-size: 28rpx;
  color: rgba(255,255,255,0.5);
  letter-spacing: 4rpx;
}

.entry-cards {
  display: flex;
  padding: 24rpx;
  gap: 16rpx;
  background: rgba(10,22,40,0.95);
  padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
}

.entry-card {
  flex: 1;
  height: 200rpx;
  border-radius: 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
  transition: transform 0.2s;
}

.entry-card:active {
  transform: scale(0.96);
}

.card-attractions {
  background: linear-gradient(135deg, #3b829e, #2d6a8f);
}

.card-food {
  background: linear-gradient(135deg, #e07a5f, #c4624a);
}

.card-itinerary {
  background: linear-gradient(135deg, #518c6e, #3d7058);
}

.card-emoji {
  font-size: 48rpx;
}

.card-label {
  font-size: 32rpx;
  font-weight: 600;
  color: #ffffff;
}

.card-sub {
  font-size: 20rpx;
  color: rgba(255,255,255,0.7);
}
</style>
