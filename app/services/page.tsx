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
        <div className="w-full h-full bg-gradient-to-br from-coral/60 via-forest/60 to-night opacity-80" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-night/30" />
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm md:text-base tracking-widest mb-4">
            槟城向导服务 · 马来西亚 &nbsp;|&nbsp; Penang Guide Service, Malaysia
          </p>
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6">
            <span className="block">不只是向导</span>
            <span className="block">是老友带你玩</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            订制行程 · 本地人视角 · 真实体验 · 不是走马观花的旅游团
          </p>
          <a
            href="#packages"
            className="inline-block bg-coral text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-coral-deep transition-colors"
          >
            查看套餐 Explore
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

// Service Intro Section
function ServiceIntroSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-sand-dark">
            <div className="w-full h-full bg-gradient-to-br from-forest/40 to-coral/40 flex items-center justify-center">
              <span className="text-white/50 text-sm">罗拉带你在槟城探险</span>
            </div>
          </div>
          <div>
            <p className="text-coral text-sm tracking-widest uppercase mb-4">关于向导服务</p>
            <h2 className="font-serif text-3xl md:text-4xl text-night mb-6 leading-tight">
              不是导游<br />是老友带你看槟城
            </h2>
            <div className="space-y-4 text-text/80 leading-relaxed">
              <p>
                我是罗拉，在槟城生活了8年的本地人。不是导游，不带旅游团——是本地朋友陪你玩，带你去游客找不到的地方。
              </p>
              <p>
                每一个行程都是订制的。不用早起赶景点，不用进购物店。想几点起就几点起，想吃什么就吃什么。
              </p>
              <p>
                记住：好的旅行不是打卡多少地方，是真正感受一个地方的气息。
              </p>
            </div>
            <blockquote className="mt-8 pl-4 border-l-2 border-coral text-ocean italic font-serif text-lg">
              "旅行的意义不是看了多少风景，是带走了多少故事。"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

// Service Packages Section
function PackagesSection() {
  const packages = [
    {
      name: '半天探索',
      nameEn: 'Half Day Explorer',
      price: '299',
      unit: '马币/2-4人',
      duration: '4小时',
      desc: '适合时间紧张的旅行者。精选2-3个景点 + 1顿本地美食，带你快速感受槟城精华。',
      gradient: 'from-ocean/60 to-ocean-deep/60',
      emoji: '🚶',
      features: [
        '2-3个精选景点',
        '1顿地道美食',
        '全程英语/中文',
        '交通指引',
      ],
      highlight: false,
    },
    {
      name: '全天深度',
      nameEn: 'Full Day Immersion',
      price: '499',
      unit: '马币/2-4人',
      duration: '8小时',
      desc: '真正的槟城体验。5-6个景点 + 3道本地美食 + 1个隐藏地点，带你走透透。',
      gradient: 'from-forest/60 to-night/60',
      emoji: '🌴',
      features: [
        '5-6个精选景点',
        '3顿地道美食',
        '1个隐藏地点',
        '全程英语/中文',
        '交通全包',
      ],
      highlight: true,
    },
    {
      name: '定制之旅',
      nameEn: 'Custom Journey',
      price: '面议',
      unit: '根据行程定价',
      duration: '自定义',
      desc: '完全订制的行程。几天都行，想去哪里就去哪里。适合家庭、情侣、摄影爱好者。',
      gradient: 'from-coral/60 to-coral-deep/60',
      emoji: '✨',
      features: [
        '完全自定义行程',
        '天数不限',
        '专属向导服务',
        '特色体验预约',
        '全程交通安排',
        '24小时在线支持',
      ],
      highlight: false,
    },
  ]

  return (
    <section id="packages" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">服务套餐 · Service Packages</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
            选择你的槟城方式<br />老友带你玩
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            不是旅游团，是订制体验。每一个套餐都是为你量身打造的。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-night text-white ring-2 ring-coral scale-105'
                  : 'bg-cream hover:shadow-xl'
              }`}
            >
              {pkg.highlight && (
                <div className="bg-coral text-white text-xs text-center py-2 tracking-wider font-medium">
                  最受欢迎 MOST POPULAR
                </div>
              )}
              <div className={`p-8`}>
                <div className={`text-5xl mb-4`}>{pkg.emoji}</div>
                <div className="mb-4">
                  <span className="font-serif text-2xl">{pkg.name}</span>
                  <span className={`text-sm ml-2 ${pkg.highlight ? 'text-white/60' : 'text-text/40'}`}>· {pkg.nameEn}</span>
                </div>
                <div className="mb-6">
                  <span className="font-serif text-4xl">{pkg.price}</span>
                  <span className={`text-sm ml-2 ${pkg.highlight ? 'text-white/60' : 'text-text/40'}`}>{pkg.unit}</span>
                </div>
                <div className={`text-xs ${pkg.highlight ? 'text-white/50' : 'text-text/40'} mb-4`}>
                  ⏱ {pkg.duration}
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${pkg.highlight ? 'text-white/80' : 'text-text/60'}`}>
                  {pkg.desc}
                </p>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className={pkg.highlight ? 'text-coral' : 'text-forest'}>✓</span>
                      <span className={`text-sm ${pkg.highlight ? 'text-white/80' : 'text-text/70'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full text-sm font-medium tracking-wider transition-all ${
                    pkg.highlight
                      ? 'bg-coral text-white hover:bg-coral-deep'
                      : 'bg-night text-white hover:bg-night/80'
                  }`}
                >
                  预约咨询
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// What's Included Section
function IncludedSection() {
  const items = [
    {
      emoji: '🗺️',
      title: '订制路线',
      desc: '不走游客路线，根据你的兴趣定制专属行程',
    },
    {
      emoji: '🍜',
      title: '地道美食',
      desc: '带你吃本地人排队的店，不是网红打卡点',
    },
    {
      emoji: '📸',
      title: '拍照记录',
      desc: '用相机记录你的旅程，留下美好回忆',
    },
    {
      emoji: '🚗',
      title: '交通协助',
      desc: '包车或公共交通，带你走透透不迷路',
    },
    {
      emoji: '🗣️',
      title: '双语服务',
      desc: '中文/英文都可以，沟通无障碍',
    },
    {
      emoji: '💡',
      title: '本地Tips',
      desc: '哪里好吃、哪里好玩、哪里别去，全告诉你',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">服务包含 · What's Included</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
            老友服务<br />不只是带路
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h4 className="font-serif text-night text-sm mb-2">{item.title}</h4>
              <p className="text-text/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: '小林',
      from: '上海',
      text: '罗拉带我们去的都是本地人吃的店，炒粿条3马币好吃到哭！完全不是旅游团的体验。',
      rating: 5,
    },
    {
      name: 'Sarah',
      from: 'London',
      text: 'Best decision to book Laura! She took us to places we would never have found. The durian experience was incredible.',
      rating: 5,
    },
    {
      name: '阿伟',
      from: '广州',
      text: '订制了两天的行程，罗拉很细心，帮我们避开了很多坑。下次来还找她！',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">真实评价 · Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night">
            旅行者说<br /> Travelers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-coral">⭐</span>
                ))}
              </div>
              <p className="text-text/70 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-forest flex items-center justify-center text-white text-sm font-medium">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-night font-medium text-sm">{t.name}</p>
                  <p className="text-text/40 text-xs">{t.from}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      q: '需要提前多久预约？',
      a: '建议提前3-7天预约。旺季（6-8月榴莲季、圣诞、新年）需要更早。临时需求可以私信询问，我会尽量安排。',
    },
    {
      q: '包不包括交通费？',
      a: '半天和全天套餐不含交通费，我会提供交通指引或帮忙安排包车。定制之旅可以包含全程交通，费用另算。',
    },
    {
      q: '可以带小朋友或老人吗？',
      a: '当然可以！槟城适合所有年龄的人。我会根据你们的需求调整行程节奏和体力要求。',
    },
    {
      q: '语言不通怎么办？',
      a: '我可以说中文和英文，本地沟通没问题。点餐、问路、砍价都可以帮你搞定。',
    },
    {
      q: '如果不喜欢安排的行程怎么办？',
      a: '行程开始前可以随时调整。旅行中发现想换地方？随时说，咱们灵活变通。',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">常见问题 · FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night">
            你可能想问的
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-sand rounded-xl p-6 hover:border-coral/30 transition-colors">
              <h4 className="font-serif text-night mb-2">{faq.q}</h4>
              <p className="text-text/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-night">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
          准备好来槟城了吗？
        </h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">
          告诉我你的旅行计划，我来帮你安排一个专属的槟城之旅。不是旅游团，是老友带你看槟城。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/60123456789"
            className="inline-block bg-coral text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-coral-deep transition-colors"
          >
            📱 WhatsApp 咨询
          </a>
          <a
            href="mailto:laura@penangwildroam.com"
            className="inline-block bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-white/20 transition-colors"
          >
            ✉️ 邮件联系
          </a>
        </div>
        <p className="text-white/40 text-xs mt-8">
          通常在12小时内回复 · Usually reply within 12 hours
        </p>
      </div>
    </section>
  )
}

// Main Page Component
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServiceIntroSection />
      <PackagesSection />
      <IncludedSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
