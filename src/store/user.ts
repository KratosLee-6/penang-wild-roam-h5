import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface UserInfo {
  nickname: string
  avatar: string
}

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const userInfo = ref<UserInfo>({ nickname: '', avatar: '' })
  const language = ref<'zh' | 'en'>('zh')
  const likes = ref<string[]>([])
  const favorites = ref<string[]>([])

  const initials = computed(() => {
    if (!userInfo.value.nickname) return '?'
    return userInfo.value.nickname.charAt(0).toUpperCase()
  })

  function login() {
    isLoggedIn.value = true
    userInfo.value = {
      nickname: '旅行者',
      avatar: '',
    }
  }

  function logout() {
    isLoggedIn.value = false
    userInfo.value = { nickname: '', avatar: '' }
    likes.value = []
    favorites.value = []
  }

  function updateNickname(name: string) {
    userInfo.value.nickname = name
  }

  function toggleLike(id: string) {
    const idx = likes.value.indexOf(id)
    if (idx > -1) {
      likes.value.splice(idx, 1)
    } else {
      likes.value.push(id)
    }
  }

  function isLiked(id: string): boolean {
    return likes.value.includes(id)
  }

  function toggleFavorite(id: string) {
    const idx = favorites.value.indexOf(id)
    if (idx > -1) {
      favorites.value.splice(idx, 1)
    } else {
      favorites.value.push(id)
    }
  }

  function isFavorited(id: string): boolean {
    return favorites.value.includes(id)
  }

  function setLanguage(lang: 'zh' | 'en') {
    language.value = lang
  }

  return {
    isLoggedIn,
    userInfo,
    language,
    likes,
    favorites,
    initials,
    login,
    logout,
    updateNickname,
    toggleLike,
    isLiked,
    toggleFavorite,
    isFavorited,
    setLanguage,
  }
}, {
  persist: {
    key: 'penang-user-store',
    storage: {
      getItem(key: string) {
        try {
          const raw = Taro.getStorageSync(key)
          return raw ? JSON.parse(raw) : null
        } catch {
          return null
        }
      },
      setItem(key: string, value: any) {
        Taro.setStorageSync(key, JSON.stringify(value))
      },
    },
  },
})
