<template>
  <View class="page">
    <View class="header">
      <Text class="header-title">5天4夜行程</Text>
      <Text class="header-sub">Itinerary</Text>
    </View>
    <ScrollView class="scroll" scroll-y>
      <View class="timeline">
        <View v-for="day in days" :key="day.day" class="day-card">
          <View class="day-left">
            <View :class="['day-circle', day.bgColor]">
              <Text class="day-num">{{ day.day }}</Text>
            </View>
            <View v-if="day.day < 5" class="day-line" />
          </View>
          <View class="day-right">
            <View class="day-header">
              <Text class="day-title">{{ day.title }}</Text>
              <View :class="['day-tag', day.tagColor]">
                <Text class="day-tag-text">{{ day.tag }}</Text>
              </View>
            </View>
            <Text class="day-desc">{{ day.description }}</Text>
            <View class="day-pills">
              <Text v-for="(p, i) in day.highlights" :key="i" class="day-pill">{{ p }}</Text>
            </View>
          </View>
        </View>
      </View>
      <!-- Cost summary -->
      <View class="cost-section">
        <Text class="cost-title">💰 费用参考</Text>
        <View class="cost-grid">
          <View class="cost-item">
            <Text class="cost-num">800-1500</Text>
            <Text class="cost-label">马币/人（总费用）</Text>
          </View>
          <View class="cost-item">
            <Text class="cost-num">150-400</Text>
            <Text class="cost-label">马币（2晚住宿）</Text>
          </View>
          <View class="cost-item">
            <Text class="cost-num">80-150</Text>
            <Text class="cost-label">马币/天（餐饮）</Text>
          </View>
          <View class="cost-item">
            <Text class="cost-num">50-80</Text>
            <Text class="cost-label">马币（全程交通）</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getItinerary, type DayPlan } from '@/services/content'

const days = ref<DayPlan[]>([])

onMounted(async () => {
  days.value = await getItinerary()
})
</script>

<style scoped>
.page { min-height: 100vh; background: #faf8f5; }
.header { padding: 32rpx 24rpx 16rpx; background: #fff; border-bottom: 1rpx solid #f0ede8; }
.header-title { font-size: 48rpx; font-weight: 700; color: #1a1a1a; }
.header-sub { font-size: 24rpx; color: #999; margin-left: 16rpx; }
.scroll { height: calc(100vh - 200rpx); }
.timeline { padding: 32rpx 24rpx; }
.day-card { display: flex; gap: 24rpx; margin-bottom: 8rpx; }
.day-left { display: flex; flex-direction: column; align-items: center; }
.day-circle { width: 72rpx; height: 72rpx; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.bg-blue-500 { background: #3b82f6; }
.bg-orange-500 { background: #f97316; }
.bg-green-500 { background: #22c55e; }
.bg-red-500 { background: #ef4444; }
.bg-gray-500 { background: #6b7280; }
.day-num { color: #fff; font-size: 28rpx; font-weight: 700; }
.day-line { flex: 1; width: 2rpx; background: #e5e7eb; margin: 8rpx 0; min-height: 40rpx; }
.day-right { flex: 1; background: #fff; border-radius: 20rpx; padding: 24rpx; margin-bottom: 24rpx; }
.day-header { display: flex; align-items: center; gap: 16rpx; margin-bottom: 12rpx; }
.day-title { font-size: 32rpx; font-weight: 600; color: #1a1a1a; }
.bg-blue-100 { background: #dbeafe; }
.bg-orange-100 { background: #ffedd5; }
.bg-green-100 { background: #dcfce7; }
.bg-red-100 { background: #fee2e2; }
.bg-gray-100 { background: #f3f4f6; }
.text-blue-600 { color: #2563eb; }
.text-orange-600 { color: #ea580c; }
.text-green-600 { color: #16a34a; }
.text-red-600 { color: #dc2626; }
.text-gray-600 { color: #4b5563; }
.day-tag { padding: 4rpx 16rpx; border-radius: 20rpx; }
.day-tag-text { font-size: 20rpx; }
.day-desc { font-size: 26rpx; color: #666; line-height: 1.7; margin-bottom: 16rpx; }
.day-pills { display: flex; flex-wrap: wrap; gap: 8rpx; }
.day-pill { font-size: 20rpx; padding: 6rpx 16rpx; background: #f5f3f0; color: #666; border-radius: 20rpx; }
.cost-section { margin: 0 24rpx 32rpx; background: #1a1a1a; border-radius: 24rpx; padding: 32rpx; }
.cost-title { font-size: 32rpx; font-weight: 600; color: #fff; text-align: center; margin-bottom: 24rpx; }
.cost-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24rpx; }
.cost-item { text-align: center; }
.cost-num { display: block; font-size: 36rpx; font-weight: 700; color: #e07a5f; margin-bottom: 8rpx; }
.cost-label { display: block; font-size: 22rpx; color: rgba(255,255,255,0.6); }
</style>
