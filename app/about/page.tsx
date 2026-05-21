'use client'

import { useEffect, useState } from 'react'

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
      <a href="/" className="font-serif text-white text-sm md:text-base font-semibold tracking-widest">
        PENANG WILD ROAM
      </a>
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

function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-night">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-ocean-deep via-ocean to-night opacity-90" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/30 to-night/20" />
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(231,123,84,0.15)_0%,_transparent_50%)]" />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-coral to-coral-deep flex items-center justify-center text-6xl md:text-7xl shadow-2xl border-4 border-cream/20 mx-auto">
            🏝️
          </div>
        </div>
        <p className="text-coral text-sm md:text-base tracking-widest uppercase mb-4">
          关于罗拉 · About Laura
        </p>
        <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6">
          <span className="block">你的槟城老友</span>
          <span className="block">不是导游</span>
        </h1>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
          在槟城生活了12年的本地人，带你绕过游客陷阱，看见真正的南洋
        </p>
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
          <span>Available for booking</span>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest flex flex-col items-center gap-2">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-ocean to-ocean-deep flex items-center justify-center">
              <div className="text-center text-white/70 p-8">
                <div className="text-8xl mb-4">🌴</div>
                <p className="font-serif text-xl">槟城是我家</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-coral text-white p-6 rounded-2xl shadow-xl">
              <p className="font-serif text-3xl mb-1">12</p>
              <p className="text-sm opacity-80">年本地生活</p>
            </div>
          </div>
          <div>
            <p className="text-coral text-sm tracking-widest uppercase mb-4">罗拉的故事</p>
            <h2 className="font-serif text-3xl md:text-4xl text-night mb-6 leading-tight">
              从游客到本地人<br />用12年读懂一座城
            </h2>
            <div className="space-y-4 text-text/80 leading-relaxed">
              <p>
                2012年，我拖着行李箱来到槟城，那时候还是个什么都不懂的背包客。找路被骗、点餐被宰、去了全是游客的"网红景点"——该踩的坑一个没落下。
              </p>
              <p>
                后来干脆留下来，租了个小房间，在乔治市老城区住了下来。每天的事情就是：走路、吃饭、跟隔壁阿婆聊天。
              </p>
              <p>
                12年了，我在这座城市找到了爱情（我丈夫是槟城峇峇），开了自己的小店，彻底变成了一个槟城人。
              </p>
              <p>
                现在，我想把这些年走过的路、吃过的店、踩过的坑，都变成你的捷径。
              </p>
            </div>
            <blockquote className="mt-8 pl-4 border-l-2 border-coral text-ocean italic font-serif text-lg">
              "我不是导游，不背稿，不带购物。我只是想在槟城有一个老朋友的人。"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const philosophies = [
    {
      icon: '🚫',
      title: '不跑景点',
      desc: '那些攻略里的必去景点？大部分都是给游客看的。我带你去的，是本地人真正会去的角落。',
    },
    {
      icon: '🍜',
      title: '吃真的味道',
      desc: '不在网红店排队，不交"游客税"。带你吃我每天路过都会买的那几家。',
    },
    {
      icon: '🤝',
      title: '像朋友一样',
      desc: '没有行程单，没有集合时间。你想聊就聊，想一个人发呆也可以。这不是工作，是见面。',
    },
    {
      icon: '🌿',
      title: '绿色旅行',
      desc: '减少一次性用品，支持本地小贩，尊重这座城市的节奏。小而真实的旅行。',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-night">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">旅行理念</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            野是生活态度<br />食是城市灵魂
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            这是 Penang Wild Roam 的口号，也是我带团的理念
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophies.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl text-cream mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatYouGetSection() {
  const services = [
    {
      emoji: '🗺️',
      title: '专属行程规划',
      desc: '根据你的兴趣和时间，定制专属路线。不是模板，是为你量身定制的槟城漫游。',
    },
    {
      emoji: '🍽️',
      title: '本地美食用餐',
      desc: '带你去我吃了十几年的老店，点我每次必点的那几道。不是网红推荐，是真正排队的老字号。',
    },
    {
      emoji: '📸',
      title: '旅拍记录',
      desc: 'iPhone摄影爱好者，帮你拍一些"不像游客照"的照片。留下这座城市和你最真实的瞬间。',
    },
    {
      emoji: '🚗',
      title: '包车出行',
      desc: '全程包车，司机是认识多年的老伙计。空调足，歌单好，路熟。',
    },
    {
      emoji: '💬',
      title: '随时聊天',
      desc: '行程前、行程中、行程后，任何关于槟城的问题都可以问。我比你先到，你有问题随时能找到我。',
    },
    {
      emoji: '🎁',
      title: '小众体验',
      desc: '去游客不知道的隐藏景点：只有本地人知道的瀑布、会说福建话的老咖啡馆、藏在组屋里的老戏院。',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">你能得到什么</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
            不是跟团游<br />是私人定制
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            每一次相遇都是独特的，每一段旅程都是专属的
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="font-serif text-xl text-night mb-2">{service.title}</h3>
              <p className="text-text/60 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewSection() {
  const reviews = [
    {
      name: '阿德',
      location: '上海',
      text: '罗拉带我去了一个当地人的巴厘岛式海滩，没有任何游客，只有我们和猴子。那天是我整个东南亚之行最好的一天。',
      rating: 5,
    },
    {
      name: '小美',
      location: '北京',
      text: '本来只想找个人带路，结果收获了一个老朋友。她知道我所有的"不要"——不要去网红店，不要买游客纪念品，不要去那些所谓的必打卡景点。',
      rating: 5,
    },
    {
      name: 'Jason',
      location: '新加坡',
      text: '第一次来槟城，拉拉不仅带我吃了当地人排队的炒粿条，还帮我拍了超好看的照片。整个行程轻松自在，像跟朋友出去玩一样。',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">旅行者的评价</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night">
            他们眼中的罗拉
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-coral">★</span>
                ))}
              </div>
              <p className="text-text/80 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="border-t border-sand pt-4">
                <p className="font-serif text-night">{review.name}</p>
                <p className="text-text/50 text-xs">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-ocean-deep via-ocean to-night">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <div className="text-6xl mb-6">🤙</div>
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
          想见面吗？
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          告诉我你想什么时候来、有多少人、想玩几天。我来帮你安排一个不一样的槟城行程。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/itinerary"
            className="inline-block bg-coral text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-coral/90 transition-colors"
          >
            查看行程参考
          </a>
          <a
            href="#contact"
            className="inline-block bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-white/20 transition-colors"
          >
            预约咨询
          </a>
        </div>
        <p className="text-white/40 text-xs mt-8">
          或者直接微信 / WhatsApp 联系：+60 12-345 6789
        </p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-night">
      <Navbar />
      <HeroSection />
      <StorySection />
      <PhilosophySection />
      <WhatYouGetSection />
      <ReviewSection />
      <CTASection />
    </main>
  )
}
