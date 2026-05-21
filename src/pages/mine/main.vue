<template>
  <View class="page">
    <View class="header">
      <Text class="header-title">我的</Text>
    </View>

    <!-- Not logged in -->
    <View v-if="!userStore.isLoggedIn" class="login-section">
      <View class="avatar-placeholder">
        <Text class="avatar-text">?</Text>
      </View>
      <Text class="login-hint">登录后查看收藏和点赞内容</Text>
      <View class="login-btn" @click="doLogin">
        <Text class="login-btn-text">微信登录</Text>
      </View>
    </View>

    <!-- Logged in -->
    <View v-else>
      <View class="profile-card">
        <View class="profile-avatar">
          <Text class="avatar-initials">{{ userStore.initials }}</Text>
        </View>
        <Text class="profile-nickname">{{ userStore.userInfo.nickname || '旅行者' }}</Text>
        <View class="profile-actions">
          <View class="profile-action-btn" @click="editNickname">
            <Text class="action-btn-text">修改昵称</Text>
          </View>
          <View class="profile-action-btn" @click="editPassword">
            <Text class="action-btn-text">修改密码</Text>
          </View>
        </View>
      </View>

      <View class="menu-list">
        <View class="menu-item" @click="goFavorites">
          <Text class="menu-icon">❤️</Text>
          <Text class="menu-label">我的收藏</Text>
          <Text class="menu-arrow">›</Text>
        </View>
        <View class="menu-item" @click="goLikes">
          <Text class="menu-icon">👍</Text>
          <Text class="menu-label">我的点赞</Text>
          <Text class="menu-arrow">›</Text>
        </View>
        <View class="menu-item" @click="toggleLanguage">
          <Text class="menu-icon">🌐</Text>
          <Text class="menu-label">语言切换</Text>
          <Text class="menu-value">{{ userStore.language === 'zh' ? '中文' : 'English' }}</Text>
        </View>
      </View>

      <View class="logout-section">
        <View class="logout-btn" @click="doLogout">
          <Text class="logout-btn-text">退出登录</Text>
        </View>
      </View>
    </View>
  </View>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Taro from '@tarojs/taro'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

onMounted(() => {
  if (typeof Taro.showShareMenu === 'function') Taro.showShareMenu()
})

function doLogin() {
  // Mock WeChat login
  if (typeof wx !== 'undefined' && wx.login) {
    wx.login({
      success: (res: any) => {
        if (res.code) {
          userStore.login()
          Taro.showToast({ title: '登录成功', icon: 'success' })
        }
      },
      fail: () => {
        // Mock success for dev
        userStore.login()
        Taro.showToast({ title: '登录成功(模拟)', icon: 'success' })
      }
    })
  } else {
    userStore.login()
    Taro.showToast({ title: '登录成功(模拟)', icon: 'success' })
  }
}

function doLogout() {
  userStore.logout()
  Taro.showToast({ title: '已退出', icon: 'success' })
}

function toggleLanguage() {
  const newLang = userStore.language === 'zh' ? 'en' : 'zh'
  userStore.setLanguage(newLang)
  Taro.showToast({ title: newLang === 'zh' ? '已切换到中文' : 'Switched to English', icon: 'success' })
}

function goFavorites() {
  Taro.showToast({ title: '收藏列表', icon: 'none' })
}

function goLikes() {
  Taro.showToast({ title: '点赞列表', icon: 'none' })
}

function editNickname() {
  Taro.showToast({ title: '修改昵称功能', icon: 'none' })
}

function editPassword() {
  Taro.showToast({ title: '修改密码功能', icon: 'none' })
}
</script>

<style scoped>
.page { min-height: 100vh; background: #faf8f5; }
.header { padding: 32rpx 24rpx 16rpx; background: #fff; border-bottom: 1rpx solid #f0ede8; }
.header-title { font-size: 48rpx; font-weight: 700; color: #1a1a1a; }
.login-section { display: flex; flex-direction: column; align-items: center; padding-top: 120rpx; }
.avatar-placeholder { width: 160rpx; height: 160rpx; border-radius: 50%; background: #e0e0e0; display: flex; align-items: center; justify-content: center; margin-bottom: 24rpx; }
.avatar-text { font-size: 80rpx; color: #999; }
.login-hint { font-size: 28rpx; color: #999; margin-bottom: 40rpx; }
.login-btn { background: #07c160; padding: 24rpx 80rpx; border-radius: 50rpx; }
.login-btn-text { color: #fff; font-size: 32rpx; font-weight: 600; }
.profile-card { margin: 32rpx 24rpx; background: #fff; border-radius: 24rpx; padding: 40rpx; display: flex; flex-direction: column; align-items: center; }
.profile-avatar { width: 140rpx; height: 140rpx; border-radius: 50%; background: linear-gradient(135deg, #e07a5f, #c4624a); display: flex; align-items: center; justify-content: center; margin-bottom: 20rpx; }
.avatar-initials { font-size: 56rpx; font-weight: 700; color: #fff; }
.profile-nickname { font-size: 36rpx; font-weight: 600; color: #1a1a1a; margin-bottom: 24rpx; }
.profile-actions { display: flex; gap: 24rpx; }
.profile-action-btn { padding: 12rpx 32rpx; background: #f5f3f0; border-radius: 50rpx; }
.action-btn-text { font-size: 26rpx; color: #666; }
.menu-list { margin: 0 24rpx; background: #fff; border-radius: 24rpx; overflow: hidden; }
.menu-item { display: flex; align-items: center; padding: 32rpx 24rpx; border-bottom: 1rpx solid #f5f3f0; }
.menu-item:last-child { border-bottom: none; }
.menu-icon { font-size: 36rpx; margin-right: 20rpx; }
.menu-label { flex: 1; font-size: 30rpx; color: #1a1a1a; }
.menu-arrow { font-size: 36rpx; color: #ccc; }
.menu-value { font-size: 26rpx; color: #999; }
.logout-section { margin: 40rpx 24rpx 0; }
.logout-btn { background: #fff; border-radius: 24rpx; padding: 32rpx; display: flex; align-items: center; justify-content: center; }
.logout-btn-text { font-size: 30rpx; color: #ef4444; }
</style>
