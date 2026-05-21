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

// Hero Section
function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-night">
      <div className="absolute inset-0 hero-bg-zoom">
        <div className="w-full h-full bg-gradient-to-br from-ocean-deep via-ocean to-forest opacity-80" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-night/30" />
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm md:text-base tracking-widest mb-4">
            槟城 · 马来西亚 &nbsp;|&nbsp; Penang, Malaysia
          </p>
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6">
            <span className="block">野是生活态度</span>
            <span className="block">食是城市灵魂</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            5天4晚 · 本地老友陪你漫游南洋 · 不是导游，是朋友
          </p>
          <a
            href="#experiences"
            className="inline-block bg-coral text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-coral-deep transition-colors"
          >
            探索旅程 Explore
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest flex flex-col items-center gap-2">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}

// Stats Strip Section
function StatsStrip() {
  const stats = [
    { number: '823万', label: '年酒店住客（2024）' },
    { number: '+13.3%', label: '游客年增长' },
    { number: '520%', label: '中国游客增长（2025）' },
    { number: '48.5%', label: '首选美食体验' },
    { number: '95%', label: '自由行比例' },
    { number: '5+', label: '年本地生活' },
  ]

  return (
    <section className="bg-sand py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-2xl md:text-3xl text-night font-semibold mb-1">
                {stat.number}
              </div>
              <div className="text-text/60 text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden bg-sand-dark">
            <div className="w-full h-full bg-gradient-to-br from-forest/40 to-ocean/40 flex items-center justify-center">
              <span className="text-white/50 text-sm">罗拉在直落巴巷</span>
            </div>
          </div>
          <div>
            <p className="text-coral text-sm tracking-widest uppercase mb-4">关于这场漫游</p>
            <h2 className="font-serif text-3xl md:text-4xl text-night mb-6 leading-tight">
              住在当地，<br />像朋友一样带你玩
            </h2>
            <div className="space-y-4 text-text/80 leading-relaxed">
              <p>
                我是罗拉。以前是发型师，现在是住在槟城直落巴巷的&quot;本地老友&quot;。
              </p>
              <p>
                我不带你去网红打卡点——我带你骑摩托艇绕槟岛、赶海挖蛤蜊、在礁石边剪头发。
              </p>
              <p>
                花国内游的钱，享受真正的异域风情。直飞3小时，无时差，免签。
              </p>
            </div>
            <blockquote className="mt-8 pl-4 border-l-2 border-coral text-ocean italic font-serif text-lg">
              &quot;在槟城，野是生活态度，食是城市灵魂。&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

// Photo Strip Section
function PhotoStrip() {
  const photos = [
    { label: '海滩度假', color: 'from-ocean/60 to-ocean-deep/60' },
    { label: '美食体验', color: 'from-coral/60 to-coral-deep/60' },
    { label: '水上冒险', color: 'from-ocean-deep/60 to-night/60' },
    { label: '森林探险', color: 'from-forest/60 to-forest/80' },
  ]

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-80">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`relative overflow-hidden group cursor-pointer bg-gradient-to-br ${photo.color}`}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-sm md:text-base font-medium tracking-wider group-hover:scale-110 transition-transform duration-500">
              {photo.label}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}

// Experiences Section
function ExperiencesSection() {
  const cards = [
    {
      category: '景点',
      sub: '乔治市',
      title: '姓氏桥',
      desc: '海上漂流百年的华人村落，最后的槟城秘境。水上高脚木屋，涨潮时房子像漂浮在海上。',
      tags: ['📍 免费', '⏰ 8-10点最佳', '📸 水上倒影'],
      detail: '切蒂族桥附近 · CAT免费巴士到Lebuh Amen，步行8分钟',
      gradient: 'from-ocean/50 to-ocean-deep/50',
      placeholder: '姓氏桥 · Clan Jetty',
    },
    {
      category: '景点',
      sub: '海拔821米',
      title: '升旗山',
      desc: '俯瞰整个槟城的最佳视角。整座城铺开在眼前，那一刻突然理解为什么马来西亚叫&quot;大马&quot;。',
      tags: ['💰 30马币往返', '⏰ 2-3小时', '🚠 坐右边风景'],
      detail: 'Air Itam · 405路公交或打车/Bolt到门口',
      gradient: 'from-forest/50 to-night/50',
      placeholder: '升旗山 · Penang Hill',
    },
    {
      category: '景点',
      sub: '乔治市',
      title: '乔治市街头艺术',
      desc: '整条街都是画廊。找&quot;Little Children on a Bicycle&quot;，配套场景互动拍照。',
      tags: ['📍 免费', '🛵 建议骑车', '📸 侧拍/斜拍'],
      detail: 'Ah Quee Street · 下载Locus APP离线壁画地图',
      gradient: 'from-coral/50 to-coral-deep/50',
      placeholder: '壁画街 · Street Art',
    },
    {
      category: '美食',
      sub: '夜市',
      title: '汕头街四大天王',
      desc: '本地人的深夜食堂。权记鸭肉粿条汤 + 天皇鸡饭 + 好姨海南咖啡 + 煎蕊冰。',
      tags: ['🍜 粿条汤', '🍗 海南鸡饭', '🧋 煎蕊冰'],
      detail: 'Jalan Macalister · 18:00-23:00 · 只收现金',
      gradient: 'from-coral/60 to-night/40',
      placeholder: '汕头街 · Jalan Macalister',
    },
    {
      category: '美食',
      sub: '国民美食',
      title: '亚参叻沙',
      desc: '马来西亚国汤。酸→辣→鲜→香，层次爆炸。汤底用新鲜鱼骨熬，不粉冲。',
      tags: ['🏆 西刀口天花板', '💰 8-12马币', '🕐 10-17点'],
      detail: '头条亚参叻沙 · Lebuh Situt Kechil · 周三休息',
      gradient: 'from-ocean/60 to-forest/40',
      placeholder: '亚参叻沙 · Asam Laksa',
    },
    {
      category: '美食',
      sub: '街头米其林',
      title: '炒粿条',
      desc: '马来西亚&quot;国炒&quot;。猛火快炒，锅气十足，每一根粿条都裹着酱香。2023年米其林推荐。',
      tags: ['🏆 米其林推荐', '💰 8-12马币', '🥚 加生蛋黄'],
      detail: '兴发茶餐室 · Lebuh Quee皇后城对面 · 12-18点',
      gradient: 'from-sand-dark/60 to-coral/40',
      placeholder: '炒粿条 · Char Kway Teow',
    },
    {
      category: '行程',
      sub: '新手入门',
      title: '3天2夜懒人包',
      desc: '第一次去看这篇就够了。老城暴走 + 自然文化 + 深度游，不走冤枉路。',
      tags: ['🏙️ 乔治市', '⛰️ 升旗山', '🏖️ 海滩'],
      detail: '约800-1500马币/人 · 壁画街 + 姓氏桥 + 汕头街',
      gradient: 'from-ocean-deep/60 to-night/60',
      placeholder: '3天2夜行程',
    },
    {
      category: '行程',
      sub: '慢旅行',
      title: '5天4夜深度游',
      desc: '把槟城当生活的地方来逛。文化遗产日 + 自然风光日 + 深度美食日。',
      tags: ['🏛️ 娘惹博物馆', '🦋 植物园', '🍫 巧克力工厂'],
      detail: '每天不超3个景点 · 留时间发呆 · 和本地人聊天',
      gradient: 'from-forest/60 to-ocean/40',
      placeholder: '5天4夜行程',
    },
    {
      category: '攻略',
      sub: '防踩雷',
      title: '槟城避坑大全',
      desc: '这10个坑99%的人都踩过！亲身经历总结，升旗山不要周末去，换钱去市区不机场。',
      tags: ['⚠️ 升旗山平日去', '💱 市区换钱', '💵 带现金'],
      detail: '10个真实踩坑经历 · 不走冤枉路 · 不花冤枉钱',
      gradient: 'from-coral-deep/60 to-night/60',
      placeholder: '避坑指南',
    },
  ]

  const placeholders = [
    {
      emoji: '🏖️',
      title: '巴都丁宜海滩',
      desc: '槟城最著名的海滩，夜市热闹，日落绝美。海边骑马、摩托艇、水上项目齐全。',
      tags: ['🏖️ 海滩', '🌅 日落', '🍤 海鲜'],
      gradient: 'from-ocean/60 to-sand/40',
    },
    {
      emoji: '🏛️',
      title: '极乐寺',
      desc: '东南亚最大观音庙，拥有七层高佛塔和巨大观音像。缆车登山，视野绝佳。',
      tags: ['🏛️ 寺庙', '🙏 观音像', '🚡 缆车登山'],
      gradient: 'from-forest/60 to-night/40',
    },
    {
      emoji: '🦋',
      title: '植物园 & 蝴蝶园',
      desc: '槟城植物园依山而建，原始森林气息浓厚。蝴蝶园与热带昆虫亲密接触。',
      tags: ['🦋 蝴蝶园', '🌿 植物园', '📸 生态摄影'],
      gradient: 'from-forest/80 to-ocean-deep/40',
    },
  ]

  return (
    <section id="experiences" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">体验亮点 · What We Do</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
            比导游更野，<br />比攻略更真实
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            每一项体验都是罗拉亲测过的——不是打卡，是和生活交手。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="group bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className={`aspect-[4/3] bg-gradient-to-br ${card.gradient} flex items-center justify-center`}>
                <span className="text-white/60 text-sm">{card.placeholder}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-coral tracking-wider uppercase">{card.category}</span>
                  <span className="text-xs text-text/40">·</span>
                  <span className="text-xs text-text/40">{card.sub}</span>
                </div>
                <h3 className="font-serif text-xl text-night mb-2">{card.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed mb-4">{card.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-sand text-text/60 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <p className="text-text/50 text-xs leading-relaxed">{card.detail}</p>
              </div>
            </div>
          ))}

          {placeholders.map((p, i) => (
            <div key={i} className="group bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 opacity-60">
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <span className="text-white/60 text-sm">{p.title}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-coral tracking-wider uppercase">景点</span>
                  <span className="text-xs text-text/40">·</span>
                  <span className="text-xs text-text/40">内容待补充</span>
                </div>
                <h3 className="font-serif text-xl text-night mb-2">{p.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-sand text-text/60 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <p className="text-text/50 text-xs italic">内容待补充 — 老米整理中</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Itinerary Section
function ItinerarySection() {
  const days = [
    {
      num: 1,
      title: '抵达 + 适应',
      tag: '轻松',
      tagColor: 'bg-ocean/10 text-ocean',
      desc: '入住乔治市Muntri Lane附近（走路到所有景点），下午闲逛老街熟悉环境，傍晚姓李桥看日落，晚上汕头街吃四大天王。',
      pills: ['🏨 Muntri Lane', '🌅 姓李桥日落', '🍜 汕头街夜市'],
      bgColor: 'bg-ocean',
    },
    {
      num: 2,
      title: '文化遗产日',
      tag: '文化',
      tagColor: 'bg-coral/10 text-coral',
      desc: '上午娘惹博物馆（提前买票！），午餐对面印度庙素食，下午邱公司 + 周围壁画，傍晚爱情巷散步。',
      pills: ['🏛️ 娘惹博物馆', '🖼️ 邱公司', '💕 爱情巷'],
      bgColor: 'bg-ocean-deep',
    },
    {
      num: 3,
      title: '自然风光日',
      tag: '自然',
      tagColor: 'bg-forest/10 text-forest',
      desc: '升旗山看日出（5点出发！），回笼觉到中午，下午植物园 + 蝴蝶园，傍晚巴都丁宜海滩等日落。',
      pills: ['⛰️ 升旗山日出', '🦋 蝴蝶园', '🏖️ 巴都丁宜'],
      bgColor: 'bg-forest',
    },
    {
      num: 4,
      title: '深度美食日',
      tag: '美食',
      tagColor: 'bg-coral/10 text-coral',
      desc: '上午Papparich国民早餐，下午深入汕头街小吃，傍晚探索隐秘茶餐室，晚上加尔维斯顿巧克力工厂（看巧克力制作）。',
      pills: ['☕ Papparich', '🍜 汕头街深度', '🍫 巧克力工厂'],
      bgColor: 'bg-coral',
    },
    {
      num: 5,
      title: '购物 + 离开',
      tag: '收尾',
      tagColor: 'bg-night/10 text-night',
      desc: '上午葛尼广场购物 or 机场免税店，午餐最后一碗叻沙，带着满满的回忆离开。',
      pills: ['🛍️ 葛尼广场', '🍜 最后一口叻沙', '✈️ 回家'],
      bgColor: 'bg-night',
    },
  ]

  return (
    <section id="itinerary" className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">行程规划 · Itinerary</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
            5天4晚，<br />把槟城当生活的地方来逛
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            不是赶行程，是换一种活法。每天不排超过3个景点，留时间发呆，和本地人聊天。
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {days.map((day) => (
            <div key={day.num} className="flex gap-6">
              <div className={`flex-shrink-0 w-14 h-14 rounded-full ${day.bgColor} text-white flex flex-col items-center justify-center font-serif`}>
                <span className="text-xs opacity-80">DAY</span>
                <span className="text-lg leading-none">{day.num}</span>
              </div>
              <div className="flex-1 bg-cream rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-serif text-xl text-night">{day.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${day.tagColor}`}>{day.tag}</span>
                </div>
                <p className="text-text/60 text-sm mb-4">{day.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {day.pills.map((pill, i) => (
                    <span key={i} className="text-xs bg-sand text-text/60 px-2 py-1 rounded-full">{pill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Summary */}
        <div className="mt-16 max-w-3xl mx-auto bg-night rounded-2xl p-8 text-white">
          <h3 className="font-serif text-xl mb-6 text-center">💰 费用参考</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-serif text-coral mb-1">800-1500</div>
              <div className="text-xs text-white/60">马币/人（总费用）</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-coral mb-1">150-400</div>
              <div className="text-xs text-white/60">马币（2晚住宿）</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-coral mb-1">80-150</div>
              <div className="text-xs text-white/60">马币/天（餐饮）</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-coral mb-1">50-80</div>
              <div className="text-xs text-white/60">马币（全程交通）</div>
            </div>
          </div>
          <p className="text-center text-white/50 text-xs mt-6">
            含升旗山门票 + 其他景点 &lt; 50马币 · 全程Bolt出行 · 槟城不大，没必要租车
          </p>
        </div>
      </div>
    </section>
  )
}

// Data Insights Section
function DataInsightsSection() {
  const stats = [
    {
      number: '823万',
      label: '年酒店住客（2024）',
      trend: '+8.2%',
      trendUp: true,
    },
    {
      number: '+13.3%',
      label: '游客年增长率',
      trend: '持续增长',
      trendUp: true,
    },
    {
      number: '520%',
      label: '中国游客增长（2025）',
      trend: '疫后爆发',
      trendUp: true,
    },
    {
      number: '48.5%',
      label: '首选美食体验',
      trend: '美食驱动型目的地',
      trendUp: true,
    },
    {
      number: '95%',
      label: '自由行比例',
      trend: '深度游为主',
      trendUp: true,
    },
    {
      number: '5+',
      label: '年本地生活经验',
      trend: '罗拉亲测',
      trendUp: null,
    },
  ]

  return (
    <section id="insights" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">数据洞察 · By The Numbers</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
            为什么现在是<br />去槟城的最佳时机？
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            数据告诉你：槟城正在爆发前夜，现在去的人都在捡漏。
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">

          {stats.map((stat, i) => (
            <div key={i} className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-all">
              <div className="font-serif text-3xl md:text-4xl text-night font-semibold mb-2">
                {stat.number}
              </div>
              <div className="text-text/60 text-sm mb-3">{stat.label}</div>
              {stat.trendUp !== null && (
                <div className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                  stat.trendUp ? 'bg-forest/10 text-forest' : 'bg-coral/10 text-coral'
                }`}>
                  {stat.trendUp ? '↑' : '↓'} {stat.trend}
                </div>
              )}
              {stat.trendUp === null && (
                <div className="text-xs text-text/40">{stat.trend}</div>
              )}
            </div>
          ))}

        </div>

        {/* Visual Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Chart 1: 游客增长趋势 */}
          <div className="bg-night rounded-2xl p-6 text-white">
            <h4 className="font-serif text-lg mb-4">中国游客增长趋势</h4>
            <div className="space-y-3">
              {[
                { year: '2023', bar: '15%', width: 'w-[15%]' },
                { year: '2024', bar: '45%', width: 'w-[45%]' },
                { year: '2025', bar: '520%', width: 'w-full bg-coral rounded' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs text-white/50 w-8">{item.year}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-4 overflow-hidden">
                    <div className={`${item.width} bg-coral h-full rounded-full flex items-center justify-end pr-2`}>
                      <span className="text-xs text-white font-medium">{item.bar}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-4">数据来源：马来西亚旅游局 Penang Tourism</p>
          </div>

          {/* Chart 2: 消费类型分布 */}
          <div className="bg-cream rounded-2xl p-6">
            <h4 className="font-serif text-lg text-night mb-4">旅行消费类型分布</h4>
            <div className="space-y-3">
              {[
                { label: '美食餐饮', pct: 35, color: 'bg-coral' },
                { label: '住宿', pct: 25, color: 'bg-ocean' },
                { label: '交通', pct: 15, color: 'bg-forest' },
                { label: '景点门票', pct: 10, color: 'bg-ocean-deep' },
                { label: '购物纪念', pct: 15, color: 'bg-sand-dark' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs text-text/60 w-16">{item.label}</span>
                  <div className="flex-1 bg-sand rounded-full h-4 overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }} />
                  </div>
                  <span className="text-xs text-text/60 w-8">{item.pct}%</span>
                </div>
              ))}
            </div>
            <p className="text-text/40 text-xs mt-4">基于2024年槟城游客消费调研</p>
          </div>

          {/* Chart 3: 出行方式 */}
          <div className="bg-cream rounded-2xl p-6">
            <h4 className="font-serif text-lg text-night mb-4">出行方式选择</h4>
            <div className="space-y-3">
              {[
                { mode: '自由行', pct: 95, color: 'bg-ocean' },
                { mode: '半自由行', pct: 3, color: 'bg-forest' },
                { mode: '跟团', pct: 2, color: 'bg-sand-dark' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text/70">{item.mode}</span>
                    <span className="text-text/50">{item.pct}%</span>
                  </div>
                  <div className="bg-sand rounded-full h-3 overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text/40 text-xs mt-4">自由行主导，深度体验趋势明显</p>
          </div>

        </div>

        {/* Key Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gradient-to-br from-ocean to-ocean-deep rounded-2xl p-8 text-white">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="font-serif text-xl mb-3">现在是窗口期</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              中国游客刚恢复增长，槟城还没被完全"攻略化"。景点不挤、物价合理、本地人还热情。再过1-2年，就是下一个普吉岛了。
            </p>
          </div>

          <div className="bg-gradient-to-br from-coral to-coral-deep rounded-2xl p-8 text-white">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="font-serif text-xl mb-3">花国内游的钱</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              直飞3小时，无时差，免签。住宿200-400/晚，吃饭20-50/顿， Bolt全程10-30马币。800-1500马币玩5天4晚，性价比拉满。
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

// Food Section
function FoodSection() {
  const foodGrid = [
    {
      name: '炒粿条',
      en: 'Char Kway Teow',
      desc: '猛火锅气 · 米其林推荐 · 加生蛋黄绝配',
      shop: '兴发茶餐室',
      gradient: 'from-sand-dark/50 to-coral/30',
    },
    {
      name: '汕头街四大天王',
      en: 'Jalan Macalister',
      desc: '粿条汤 · 海南鸡饭 · 咖啡 · 煎蕊冰',
      shop: '18:00-23:00',
      gradient: 'from-coral/40 to-night/30',
    },
    {
      name: '海南鸡饭',
      en: 'Hainanese Chicken Rice',
      desc: '鸡肉嫩滑 · 米饭油亮 · 简单却上头',
      shop: '天皇鸡饭 · 12-18马币',
      gradient: 'from-coral/50 to-sand/40',
    },
    {
      name: '煎蕊冰',
      en: 'Cendol',
      desc: '椰糖+椰奶 · 入口即化 · 餐后必吃',
      shop: '随便一家都好吃 · 3-5马币',
      gradient: 'from-forest/50 to-ocean/40',
    },
    {
      name: '拉茶',
      en: 'Teh Tarik',
      desc: '两国咖啡师的浪漫 · 拉出绵密泡沫',
      shop: '好姨海南咖啡 · 国民饮料',
      gradient: 'from-sand-dark/60 to-coral-deep/40',
    },
  ]

  const comingSoon = [
    {
      emoji: '🍈',
      title: '榴莲季节指南',
      desc: '马来西亚榴莲 | 猫山王/苏丹王 | 榴莲一条街 | 季节：6-8月',
    },
    {
      emoji: '🍖',
      title: '肉骨茶',
      desc: '潮汕风味 · 药材汤底 · 猪骨熬制 · 配油条蘸酱油',
    },
    {
      emoji: '🍜',
      title: '沙爹 & 咖喱面',
      desc: '沙爹：花生酱烤肉串 | 咖喱面：椰浆咖喱+米线 | 国民街头小吃',
    },
  ]

  return (
    <section id="food" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">美食地图 · Food Guide</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
            吃才是槟城的正经事
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            罗拉的私藏清单 —— 不是网红店，是本地人排队的那几家。
          </p>
        </div>

        {/* Featured: Asam Laksa */}
        <div className="mb-12 bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-ocean/40 to-forest/40 flex items-center justify-center">
              <span className="text-white/60 text-sm">亚参叻沙 · Asam Laksa</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-coral text-white tracking-wider uppercase px-2 py-1 rounded-full">必吃</span>
                <span className="text-xs text-text/40">·</span>
                <span className="text-xs text-text/40">国民美食</span>
              </div>
              <h3 className="font-serif text-2xl text-night mb-3">亚参叻沙</h3>
              <p className="text-text/70 text-sm leading-relaxed mb-4">
                马来西亚&quot;国汤&quot;。酸来自罗望子，辣来自辣椒膏，一口下去酸→辣→鲜→香，层次爆炸。汤底用新鲜鱼骨熬的，不是粉冲的。
              </p>
              <div className="space-y-2 text-sm text-text/60">
                <div className="flex items-center gap-2">
                  <span className="text-coral">🏆</span>
                  <span>头条亚参叻沙 — 西刀口（West End）天花板</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-coral">📍</span>
                  <span>Lebuh Situt Kechil（汕头街附近）</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-coral">💰</span>
                  <span>8-12马币 · 10:00-17:00 · 周三休息</span>
                </div>
              </div>
              <p className="text-text/50 text-xs mt-4 italic">
                加一碗LAKSA + 冰咖啡，绝配
              </p>
            </div>
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {foodGrid.map((food, i) => (
            <div key={i} className="bg-white rounded-xl p-4 hover:shadow-md transition-all">
              <div className={`aspect-square bg-gradient-to-br ${food.gradient} rounded-lg mb-3 flex items-center justify-center`}>
                <span className="text-white/60 text-xs">{food.en}</span>
              </div>
              <h4 className="font-serif text-night text-sm mb-1">{food.name}</h4>
              <p className="text-text/50 text-xs leading-relaxed">{food.desc}</p>
              <div className="mt-2 text-xs text-coral">{food.shop}</div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {comingSoon.map((item, i) => (
            <div key={i} className="bg-white/60 backdrop-blur rounded-xl p-5 border border-sand opacity-70">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{item.emoji}</span>
                <h4 className="font-serif text-night text-sm">{item.title}</h4>
              </div>
              <p className="text-text/50 text-xs leading-relaxed">{item.desc}</p>
              <p className="text-text/40 text-xs italic mt-2">内容待补充 — 老米整理中</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text/50 text-sm mb-4">更多美食体验，跟随罗拉一起探索</p>
          <a
            href="#experiences"
            className="inline-block bg-coral text-white px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-coral-deep transition-colors"
          >
            查看全部体验 →
          </a>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-night">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          准备好和我们一起<br />换个方式玩槟城？
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          不是导游，是朋友。跟着本地人，换一种活法玩槟城。
        </p>
        <a
          href="#plan"
          className="inline-block bg-coral text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-coral-deep transition-colors"
        >
          开始规划 Start Planning →
        </a>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-night text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <div className="font-serif text-lg tracking-widest mb-2">PENANG WILD ROAM</div>
          <div className="text-white/50 text-sm mb-6">槟城野生漫游 · Lola&apos;s Local Adventures</div>
          <div className="flex justify-center gap-6 text-sm text-white/60">
            <a href="#zh" className="hover:text-white transition-colors">中文</a>
            <a href="#en" className="hover:text-white transition-colors">English</a>
            <a href="#experiences" className="hover:text-white transition-colors">体验 Experiences</a>
            <a href="#itinerary" className="hover:text-white transition-colors">行程 Itinerary</a>
            <a href="#food" className="hover:text-white transition-colors">美食 Food</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <div data-animate id="about" className={visibleSections.has('about') ? 'visible' : 'opacity-0 translate-y-6'}>
        <AboutSection />
      </div>
      <PhotoStrip />
      <ExperiencesSection />
      <DataInsightsSection />
      <ItinerarySection />
      <FoodSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
