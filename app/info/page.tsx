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

// Info Card Component
function InfoCard({ icon, title, content }: { icon: string; title: string; content: React.ReactNode }) {
  return (
    <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-serif text-xl md:text-2xl text-night font-semibold mb-3">{title}</h3>
      <div className="text-text/80 leading-relaxed">{content}</div>
    </div>
  )
}

// Section Title Component
function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="font-serif text-3xl md:text-4xl text-night font-semibold mb-3">{title}</h2>
      {subtitle && <p className="text-text/70 text-lg">{subtitle}</p>}
    </div>
  )
}

// Transportation Info
const transportationData = [
  {
    icon: '✈️',
    title: '航空',
    content: '槟城国际机场(PEN)位于峇六拜，距乔治市约20公里。每周有多个国际航班往返新加坡、曼谷、雅加达等城市，以及国内航班连接吉隆坡。'
  },
  {
    icon: '🚌',
    title: '市内交通',
    content: 'Rapid Penang提供覆盖广泛的公交网络，票价实惠。推荐使用便捷的GRAB打车软件，支持现金和电子支付，市内出行首选。'
  },
  {
    icon: '🚗',
    title: '自驾租车',
    content: '槟城道路方向为左行，需提前了解当地交通规则。机场和市区均可租车，建议通过正规平台预约，注意国际驾照要求。'
  },
  {
    icon: '⛴️',
    title: '轮渡',
    content: '北海码头与乔治市渡轮码头之间有轮渡连接，单程约15分钟，可运载车辆和行人，是往返威省的经典选择。'
  }
]

// Practical Info Grid
const practicalData = [
  {
    icon: '💰',
    title: '货币',
    content: '马来西亚林吉特(RM)，1令吉约等于0.2美元。大多数商场和餐厅接受信用卡，但路边摊和小店建议使用现金。'
  },
  {
    icon: '⏰',
    title: '时区',
    content: '马来西亚时间(UTC+8)，与北京时间一致，无时差烦恼。'
  },
  {
    icon: '🌦️',
    title: '气候',
    content: '热带雨林气候，全年炎热潮湿，平均气温25-32°C。5-9月为旱季，是最佳旅行时间；11-2月雨量较多但多为阵雨。'
  },
  {
    icon: '🔌',
    title: '电压',
    content: '220-240V英式三脚插头，建议携带万能转换器。'
  },
  {
    icon: '📱',
    title: '通讯',
    content: '建议在机场购买本地SIM卡，Hotlink、Digi等运营商信号覆盖良好。也可开通国际漫游服务，但费用较高。'
  },
  {
    icon: '🛍️',
    title: '购物',
    content: '乔治市牛汝莪和皇后湾广场是主要购物区。槟城也是免税州，香烟、酒类等价格优惠。'
  }
]

// Emergency Contacts
const emergencyData = [
  { service: '紧急求助', number: '999' },
  { service: '火警', number: '994' },
  { service: '救护车', number: '999' },
  { service: '警察局', number: '999' },
  { service: '中国驻槟城总领事馆', number: '+60 4-227 7960' }
]

// Tips
const tipsData = [
  '槟城为穆斯林为主地区，请尊重当地宗教习俗，进入清真寺请着装得体',
  '街头美食选择多，卫生条件总体良好，肠胃敏感者可携带常用药品',
  '榴莲不可带入酒店房间或公共交通，带回酒店将被收取清洁费',
  '支付小费非强制，但餐厅账单已含服务税，无需额外支付',
  '英文和马来语为主要语言，华人普遍使用粤语和闽南语，中文沟通也较为便利'
]

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-sand">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-night">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-ocean to-forest opacity-90" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-serif text-4xl md:text-6xl text-white font-semibold mb-4">
            实用信息
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">
            行程准备，轻松出发
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Transportation Section */}
        <section className="mb-20 md:mb-28">
          <SectionTitle 
            title="交通指南" 
            subtitle="往返槟城与市内出行方式" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {transportationData.map((item, index) => (
              <InfoCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Practical Info Section */}
        <section className="mb-20 md:mb-28">
          <SectionTitle 
            title="实用贴士" 
            subtitle="让你的旅程更加顺畅" 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {practicalData.map((item, index) => (
              <InfoCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Emergency Section */}
        <section className="mb-20 md:mb-28">
          <SectionTitle 
            title="紧急联系" 
            subtitle="旅行安全有保障" 
          />
          <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyData.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                    <span className="text-coral font-semibold text-sm">急</span>
                  </div>
                  <div>
                    <p className="text-text/70 text-sm">{item.service}</p>
                    <p className="text-night font-semibold">{item.number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-20 md:mb-28">
          <SectionTitle 
            title="温馨提示" 
            subtitle="让你的槟城之旅更加完美" 
          />
          <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm">
            <ul className="space-y-4">
              {tipsData.map((tip, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ocean/10 flex items-center justify-center mt-0.5">
                    <span className="text-ocean text-sm">✓</span>
                  </span>
                  <span className="text-text/80 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-night font-semibold mb-4">
            准备好探索槟城了吗？
          </h2>
          <p className="text-text/70 mb-8 max-w-xl mx-auto">
            无论是美食、自然还是文化遗产，槟城总能给你惊喜。开始规划你的完美旅程吧。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/attractions" 
              className="px-8 py-3 bg-coral text-white rounded-full font-medium hover:bg-coral/90 transition-colors"
            >
              探索景点
            </a>
            <a 
              href="/itinerary" 
              className="px-8 py-3 bg-white text-night rounded-full font-medium hover:bg-cream transition-colors"
            >
              查看行程
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-night text-white/70 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-serif text-lg text-white mb-2">PENANG WILD ROAM</p>
          <p className="text-sm">探索马来西亚槟城的自然与文化之美</p>
          <p className="text-xs mt-6">© 2024 Penang Wild Roam. 保留所有权利。</p>
        </div>
      </footer>
    </main>
  )
}
