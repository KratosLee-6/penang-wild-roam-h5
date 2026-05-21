'use client'

import { useEffect, useState } from 'react'

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-400 ${
        scrolled
          ? 'bg-night/92 backdrop-blur-xl'
          : 'bg-gradient-to-b from-night/70 to-transparent'
      }`}
    >
      <div className="font-serif text-white text-sm md:text-base font-semibold tracking-widest">
        PENANG WILD ROAM
      </div>
      <div className="flex items-center gap-4 md:gap-5">
        <button className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/75 px-3.5 py-2 rounded-full text-xs tracking-wider hover:bg-white/20 hover:text-white transition-all">
          追踪 Follow
        </button>
        <div className="flex items-center gap-3">
          <a href="#zh" className="text-white/65 text-xs tracking-wider hover:text-white transition-colors">
            中文
          </a>
          <span className="text-white/30 text-xs">|</span>
          <a href="#en" className="text-white/65 text-xs tracking-wider hover:text-white transition-colors">
            EN
          </a>
        </div>
      </div>
    </nav>
  )
}

// 5-Day Itinerary Data
const itineraryDays = [
  {
    day: 'DAY 1',
    title: '乔治市漫游 · 街头艺术与美食初体验',
    description: '抵达槟城，入住乔治市老街区的特色民宿。下午漫步街头，寻找藏在巷弄里的壁画——少女吹笛、机车男孩、两人篮球，每一个转角都是惊喜。傍晚前往汕头街，品尝正宗炒粿条和煎蕊，感受老城的烟火气。',
    highlights: ['乔治市壁画', '街头艺术', '炒粿条', '煎蕊', '汕头街'],
    tags: ['文青', '美食', '老城']
  },
  {
    day: 'DAY 2',
    title: '姓氏桥与海上人家 · 小印度彩色世界',
    description: '清晨前往姓氏桥，看百年海上高脚屋，感受华人在槟城的奋斗史。上午穿梭小印度，彩色街屋、银器店、香料铺，浓郁的印度风情扑面而来。下午到巴都丁宜海滩，椰风斜阳，放慢脚步。',
    highlights: ['姓氏桥', '小印度', '巴都丁宜', '海滩', '海上高脚屋'],
    tags: ['人文', '建筑', '海滩']
  },
  {
    day: 'DAY 3',
    title: '升旗山云端漫步 · 极乐寺祈福',
    description: '乘坐百年山轨登上升旗山，俯瞰整座槟城岛，天际线与海岸线尽收眼底。山顶空气清新，步行道绿意盎然。下午游览极乐寺，依山而建的佛寺金碧辉煌，观音像庄严慈悲，是当地华人信仰中心。',
    highlights: ['升旗山', '山轨火车', '极乐寺', '观音像', '全景观'],
    tags: ['自然', '人文', '祈福']
  },
  {
    day: 'DAY 4',
    title: '红树林探秘 · 猴子沙滩嬉戏',
    description: '乘船进入直落巴巷红树林，穿越水上隧道，观赏热带湿地生态。调皮的长尾猕猴随时跳上船讨食，记得握紧你的相机！午后转战猴子沙滩，细白沙滩、清澈海水、慵懒的猴子居民，野趣十足。',
    highlights: ['红树林', '猴子沙滩', '乘船探险', '猕猴', '浮潜'],
    tags: ['自然', '探险', '生态']
  },
  {
    day: 'DAY 5',
    title: '香料园与榴莲庄园 · 告别槟城',
    description: '上午游览香料园，认知热带植物与香料的秘密，了解南洋料理的精髓。中午前往榴莲庄园，品尝真正的槟城榴莲——猫山王、红虾、D24，入口即化的绵密口感才是东南亚的味道。下午带着满满的回忆返程。',
    highlights: ['香料园', '榴莲庄园', '猫山王', '热带水果', '榴莲品鉴'],
    tags: ['美食', '自然', '文化']
  }
]

// Day Card Component
function DayCard({ day, index }: { day: typeof itineraryDays[0]; index: number }) {
  return (
    <div className="group relative">
      {/* Day Number */}
      <div className="absolute -left-4 top-0 md:-left-6">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-coral rounded-2xl flex flex-col items-center justify-center text-white shadow-lg transform group-hover:scale-105 transition-transform">
          <span className="text-xs font-medium tracking-wider opacity-80">DAY</span>
          <span className="text-2xl md:text-3xl font-serif font-bold">{index + 1}</span>
        </div>
      </div>

      {/* Content Card */}
      <div className="ml-16 md:ml-24 bg-cream rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-night font-semibold mb-2">
              {day.title}
            </h3>
            <p className="text-text/80 text-sm md:text-base leading-relaxed">
              {day.description}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <p className="text-xs text-text/50 tracking-wider mb-2">亮点 HIGHLIGHTS</p>
          <div className="flex flex-wrap gap-2">
            {day.highlights.map((highlight, i) => (
              <span key={i} className="text-xs bg-sand text-night px-3 py-1 rounded-full">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {day.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-ocean/10 text-ocean px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Timeline Connector
function TimelineConnector() {
  return (
    <div className="absolute left-7 md:left-9 top-20 bottom-20 w-0.5 bg-gradient-to-b from-coral via-sand-dark to-ocean opacity-30" />
  )
}

export default function ItineraryPage() {
  return (
    <main className="min-h-screen bg-night">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-night">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-ocean to-forest opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-night/40" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-ocean/20 rounded-full blur-3xl" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="text-white/70 text-sm tracking-widest mb-4">
              行程规划 · ITINERARY
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              <span className="block">5天4晚</span>
              <span className="block text-coral">深度漫游槟城</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-md leading-relaxed md:text-right">
              从街头艺术到自然秘境，从百年老街到热带果园——本地老友带你发现最真实的南洋风情
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Content */}
      <section className="relative py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Intro Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif text-coral mb-2">5</p>
              <p className="text-white/60 text-xs md:text-sm tracking-wider">天</p>
            </div>
            <div className="text-center border-x border-white/10">
              <p className="text-4xl md:text-5xl font-serif text-coral mb-2">4</p>
              <p className="text-white/60 text-xs md:text-sm tracking-wider">晚</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif text-coral mb-2">∞</p>
              <p className="text-white/60 text-xs md:text-sm tracking-wider">回忆</p>
            </div>
          </div>

          {/* Days */}
          <div className="space-y-12 md:space-y-16 relative">
            <TimelineConnector />
            {itineraryDays.map((day, index) => (
              <DayCard key={index} day={day} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-t from-night to-night/95">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white font-serif text-3xl md:text-4xl mb-6">
            准备好开启你的槟城之旅了吗？
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            本地老友陪你漫游，随时出发，说走就走。不是导游，是朋友。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="inline-block bg-coral text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-coral/90 transition-colors"
            >
              查看服务套餐
            </a>
            <a
              href="/attractions"
              className="inline-block bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-white/20 transition-colors"
            >
              探索更多景点
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs tracking-wider">
            PENANG WILD ROAM · 槟城野是生活态度
          </p>
          <div className="flex items-center gap-6">
            <a href="/attractions" className="text-white/50 text-xs hover:text-white transition-colors">景点</a>
            <a href="/food" className="text-white/50 text-xs hover:text-white transition-colors">美食</a>
            <a href="/info" className="text-white/50 text-xs hover:text-white transition-colors">实用信息</a>
            <a href="/about" className="text-white/50 text-xs hover:text-white transition-colors">关于</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
