import { computed } from 'vue'
import { useUserStore } from '@/store/user'

const zh = {
  home: {
    title: '槟城野生漫游',
    subtitle: 'PENANG WILD ROAM',
    attractions: '景点',
    food: '美食',
    itinerary: '行程',
  },
  attractions: {
    title: '景点',
    location: '位置',
    transport: '交通',
    hours: '时间',
    price: '价格',
    highlights: '亮点',
    tips: '贴士',
    like: '喜欢',
    share: '分享',
  },
  food: {
    title: '美食',
    address: '地址',
    hours: '时间',
    price: '价格',
    mustTry: '必点',
    tips: '贴士',
    like: '喜欢',
    share: '分享',
  },
  itinerary: {
    title: '5日行程',
    day: '第{n}天',
  },
  mine: {
    title: '我的',
    login: '微信一键登录',
    logout: '退出登录',
    favorites: '收藏',
    likes: '点赞',
    language: '语言切换',
    confirmLogout: '确定要退出登录吗？',
  },
}

const en: typeof zh = {
  home: {
    title: 'Penang Wild Roam',
    subtitle: 'PENANG WILD ROAM',
    attractions: 'Spots',
    food: 'Food',
    itinerary: 'Trips',
  },
  attractions: {
    title: 'Attractions',
    location: 'Location',
    transport: 'Transport',
    hours: 'Hours',
    price: 'Price',
    highlights: 'Highlights',
    tips: 'Tips',
    like: 'Like',
    share: 'Share',
  },
  food: {
    title: 'Food',
    address: 'Address',
    hours: 'Hours',
    price: 'Price',
    mustTry: 'Must Try',
    tips: 'Tips',
    like: 'Like',
    share: 'Share',
  },
  itinerary: {
    title: '5-Day Trip',
    day: 'Day {n}',
  },
  mine: {
    title: 'Profile',
    login: 'Login with WeChat',
    logout: 'Log Out',
    favorites: 'Favorites',
    likes: 'Likes',
    language: 'Language',
    confirmLogout: 'Are you sure you want to log out?',
  },
}

export function useI18n() {
  const store = useUserStore()

  const t = computed(() => {
    return store.language === 'zh' ? zh : en
  })

  function tt(path: string): string {
    const obj = store.language === 'zh' ? zh : en
    const keys = path.split('.')
    let result: any = obj
    for (const key of keys) {
      result = result?.[key]
    }
    return typeof result === 'string' ? result : path
  }

  function tDay(n: number): string {
    const tpl = store.language === 'zh' ? zh.itinerary.day : en.itinerary.day
    return tpl.replace('{n}', String(n))
  }

  return { t, tt, tDay }
}

export { zh, en }
