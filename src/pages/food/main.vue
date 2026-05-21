<template>
  <View class="page">
    <View class="header">
      <Text class="header-title">美食</Text>
      <Text class="header-sub">Food</Text>
    </View>
    <ScrollView class="scroll" scroll-y>
      <View class="list">
        <View
          v-for="item in foods"
          :key="item.id"
          class="food-card"
          @click="goDetail(item)"
        >
          <View :class="['food-hero', item.coverGradient]" />
          <View class="food-body">
            <View class="food-meta">
              <Text class="food-category">美食</Text>
              <Text class="food-sub">· {{ item.subtitle }}</Text>
            </View>
            <Text class="food-title">{{ item.title }}</Text>
            <Text class="food-desc">{{ item.description.substring(0, 80) }}...</Text>
            <View class="food-tags">
              <Text v-for="(tag, i) in item.tags.slice(0, 3)" :key="i" class="tag">{{ tag }}</Text>
            </View>
            <View class="food-info-row">
              <Text class="food-price">{{ item.price }}</Text>
              <Text class="food-hours">{{ item.hours }}</Text>
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
import { getFoods, type Food } from '@/services/content'

const foods = ref<Food[]>([])

onMounted(async () => {
  foods.value = await getFoods()
})

function goDetail(item: Food) {
  Taro.setStorageSync('curFood', item)
  Taro.navigateTo({ url: '/pages/food/Detail/main' })
}
</script>

<style scoped>
.page { min-height: 100vh; background: #faf8f5; }
.header { padding: 32rpx 24rpx 16rpx; background: #fff; border-bottom: 1rpx solid #f0ede8; }
.header-title { font-size: 48rpx; font-weight: 700; color: #1a1a1a; }
.header-sub { font-size: 24rpx; color: #999; margin-left: 16rpx; }
.scroll { height: calc(100vh - 200rpx); }
.list { padding: 24rpx; display: flex; flex-direction: column; gap: 24rpx; }
.food-card { background: #fff; border-radius: 20rpx; overflow: hidden; box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.06); display: flex; }
.food-hero { width: 200rpx; flex-shrink: 0; }
.from-ocean\/60 { background: linear-gradient(135deg, #3b829e, #2d6a8f); }
.from-sand-dark\/60 { background: linear-gradient(135deg, #c4a882, #8b6f47); }
.from-coral\/60 { background: linear-gradient(135deg, #e07a5f, #c4624a); }
.from-forest\/60 { background: linear-gradient(135deg, #518c6e, #3d7058); }
.food-body { flex: 1; padding: 20rpx; }
.food-meta { display: flex; align-items: center; gap: 8rpx; margin-bottom: 8rpx; }
.food-category { font-size: 20rpx; color: #e07a5f; font-weight: 600; }
.food-sub { font-size: 20rpx; color: #999; }
.food-title { display: block; font-size: 32rpx; font-weight: 600; color: #1a1a1a; margin-bottom: 8rpx; }
.food-desc { display: block; font-size: 22rpx; color: #666; line-height: 1.6; margin-bottom: 12rpx; }
.food-tags { display: flex; flex-wrap: wrap; gap: 6rpx; margin-bottom: 12rpx; }
.tag { font-size: 18rpx; padding: 4rpx 12rpx; background: rgba(224,122,95,0.1); color: #e07a5f; border-radius: 20rpx; }
.food-info-row { display: flex; justify-content: space-between; }
.food-price { font-size: 24rpx; color: #e07a5f; font-weight: 600; }
.food-hours { font-size: 20rpx; color: #999; }
</style>
