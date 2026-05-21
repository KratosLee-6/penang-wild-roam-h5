<template>
  <View class="page">
    <View class="header">
      <Text class="header-title">景点</Text>
      <Text class="header-sub">Attractions</Text>
    </View>

    <ScrollView class="scroll" scroll-y @scrolltolower="loadMore">
      <View class="grid">
        <View
          v-for="item in attractions"
          :key="item.id"
          class="card"
          @click="goDetail(item)"
        >
          <View :class="['card-hero', item.coverGradient]" />
          <View class="card-body">
            <View class="card-meta">
              <Text class="card-category">景点</Text>
              <Text class="card-sub">· {{ item.subtitle }}</Text>
            </View>
            <Text class="card-title">{{ item.title }}</Text>
            <Text class="card-desc">{{ item.description.substring(0, 60) }}...</Text>
            <View class="card-tags">
              <Text v-for="(tag, i) in item.tags.slice(0, 2)" :key="i" class="tag">{{ tag }}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import { getAttractions, type Attraction } from '@/services/content'

const attractions = ref<Attraction[]>([])

onMounted(async () => {
  attractions.value = await getAttractions()
})

function goDetail(item: Attraction) {
  Taro.setStorageSync('curAttraction', item)
  Taro.navigateTo({ url: '/pages/attractions/Detail/main' })
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #faf8f5;
}

.header {
  padding: 32rpx 24rpx 16rpx;
  background: #fff;
  border-bottom: 1rpx solid #f0ede8;
}

.header-title {
  font-size: 48rpx;
  font-weight: 700;
  color: #1a1a1a;
}

.header-sub {
  font-size: 24rpx;
  color: #999;
  margin-left: 16rpx;
}

.scroll {
  height: calc(100vh - 200rpx);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  padding: 24rpx;
}

.card {
  background: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.06);
}

.card-hero {
  height: 180rpx;
}

.from-ocean\/50 {
  background: linear-gradient(135deg, #3b829e, #2d6a8f);
}

.from-forest\/50 {
  background: linear-gradient(135deg, #518c6e, #3d7058);
}

.from-coral\/50 {
  background: linear-gradient(135deg, #e07a5f, #c4624a);
}

.from-ocean\/60 {
  background: linear-gradient(135deg, #3b829e, #1a4a3a);
}

.from-forest\/60 {
  background: linear-gradient(135deg, #518c6e, #1a3a2a);
}

.from-forest\/80 {
  background: linear-gradient(135deg, #518c6e, #2d6a8f);
}

.card-body {
  padding: 20rpx;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 8rpx;
  margin-bottom: 8rpx;
}

.card-category {
  font-size: 20rpx;
  color: #e07a5f;
  font-weight: 600;
}

.card-sub {
  font-size: 20rpx;
  color: #999;
}

.card-title {
  display: block;
  font-size: 30rpx;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8rpx;
}

.card-desc {
  display: block;
  font-size: 22rpx;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12rpx;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6rpx;
}

.tag {
  font-size: 18rpx;
  padding: 4rpx 12rpx;
  background: rgba(224,122,95,0.1);
  color: #e07a5f;
  border-radius: 20rpx;
}
</style>
