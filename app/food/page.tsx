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
        <div className="w-full h-full bg-gradient-to-br from-coral/60 via-coral-deep/60 to-night opacity-80" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-night/30" />
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="text-white/70 text-sm md:text-base tracking-widest mb-4">
            槟城美食 · 马来西亚 &nbsp;|&nbsp; Penang Food, Malaysia
          </p>
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6">
            <span className="block">食是城市灵魂</span>
            <span className="block">舌尖上的南洋</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            10道必吃美食 · 本地人带路的真实味道 · 不是网红推荐
          </p>
          <a
            href="#foods"
            className="inline-block bg-coral text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-coral-deep transition-colors"
          >
            探索美食 Explore
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

// Food Intro Section
function FoodIntroSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-sand-dark">
            <div className="w-full h-full bg-gradient-to-br from-coral/40 to-coral-deep/40 flex items-center justify-center">
              <span className="text-white/50 text-sm">槟城美食街景</span>
            </div>
          </div>
          <div>
            <p className="text-coral text-sm tracking-widest uppercase mb-4">关于槟城美食</p>
            <h2 className="font-serif text-3xl md:text-4xl text-night mb-6 leading-tight">
              街头米其林<br />真正的南洋味道
            </h2>
            <div className="space-y-4 text-text/80 leading-relaxed">
              <p>
                槟城是马来西亚的美食首都。2014年《孤独星球》把槟城列为亚洲最佳街头美食目的地，至今无人能超越。
              </p>
              <p>
                没有攻略里吹的那些——我带你吃本地人排队的那几家，3马币的叻沙、5马币的炒粿条、6马币的榴莲。
              </p>
              <p>
                记住：在槟城，越破旧的店越好吃。装修讲究的，都是给游客开的。
              </p>
            </div>
            <blockquote className="mt-8 pl-4 border-l-2 border-coral text-ocean italic font-serif text-lg">
              "在槟城，不要相信网红推荐——要相信排队的长度。"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

// Food Cards Section
function FoodSection() {
  const foods = [
    {
      name: '亚参叻沙',
      nameEn: 'Asam Laksa',
      price: '8-12',
      location: '头条亚参叻沙 · Lebuh Situt Kechil',
      time: '10:00-17:00 · 周三休息',
      desc: '马来西亚国汤，酸→辣→鲜→香。汤底用新鲜鱼骨熬制，酸来自罗望子，辣来自峇拉煎，每一口都是层次爆炸。',
      tips: ['认准"头条"那家', '加薄荷叶和菠萝', '鱼片不要省'],
      gradient: 'from-coral/60 to-coral-deep/60',
      placeholder: '亚参叻沙',
      emoji: '🍜',
    },
    {
      name: '炒粿条',
      nameEn: 'Char Kway Teow',
      price: '8-12',
      location: '兴发茶餐室 · Lebuh Quee对面',
      time: '12:00-18:00 · 卖完收摊',
      desc: '马来西亚"国炒"。猛火快炒，锅气十足，每一根粿条都裹着酱油的咸香。2023年米其林推荐，必吃。',
      tips: ['要求加生蛋黄', '要点腊肠', '猛火炒的才香'],
      gradient: 'from-sand-dark/60 to-coral/40',
      placeholder: '炒粿条',
      emoji: '🥜',
    },
    {
      name: '榴莲',
      nameEn: 'Durian',
      price: '20-80',
      location: '浮罗山背榴莲园 · Balik Pulau',
      time: '6-8月旺季 · 下午最好',
      desc: '猫山王、D24、红虾……槟城榴莲是马来西亚最正宗的。入口先苦后甜，回味无穷。"果王"名不虚传。',
      tips: ['认准猫山王', '要当场开', '配山竹降火'],
      gradient: 'from-forest/60 to-night/40',
      placeholder: '榴莲',
      emoji: '🥭',
    },
    {
      name: '煎蕊冰',
      nameEn: 'Cendol',
      price: '3-5',
      location: '汕头街四大天王 · Jalan Macalister',
      time: '18:00-23:00',
      desc: '槟城最经典的甜品。绿色粉条配椰奶、红豆和Gula Java糖水，夏天一口下去整个人都凉快了。',
      tips: ['加椰奶不要省', '要Gula Java糖水', '冰多才爽'],
      gradient: 'from-ocean/60 to-ocean-deep/40',
      placeholder: '煎蕊冰',
      emoji: '🧋',
    },
    {
      name: '虾面',
      nameEn: 'Prawn Noodles',
      price: '8-12',
      location: ' Meyer's Hokkien Mee · 大光坝',
      time: '07:00-14:00',
      desc: '福建虾面，虾壳熬的汤底鲜到眉毛掉。粗黄面配大虾、卤肉、豆卜，一碗管饱一上午。',
      tips: ['点特制辣酱', '汤要喝光', '配一杯凉茶'],
      gradient: 'from-ocean-deep/60 to-coral/40',
      placeholder: '虾面',
      emoji: '🦐',
    },
    {
      name: '椰浆饭',
      nameEn: 'Nasi Lemak',
      price: '5-10',
      location: '马来人早市 · 各区巴刹',
      time: '06:00-11:00 · 卖完收摊',
      desc: '马来西亚国民早餐。椰浆饭配叁巴酱、花生、小鱼干、黄瓜，半根油条。香气扑鼻，一吃就上瘾。',
      tips: ['叁巴酱要加', '配咖啡才绝', '早去才好吃'],
      gradient: 'from-sand/60 to-coral-deep/40',
      placeholder: '椰浆饭',
      emoji: '🥥',
    },
    {
      name: '沙爹',
      nameEn: 'Satay',
      price: '1-2/串',
      location: '亚依淡沙爹 · Ayer Itam',
      time: '17:00-23:00',
      desc: '炭烤牛肉/鸡肉串，配花生酱蘸汁。炭火烤的沙爹有独特的烟熏香，蘸花生酱吃，根本停不下来。',
      tips: ['牛肉比鸡肉香', '沙爹汁蘸满', '配 Ramon Blue'],
      gradient: 'from-coral-deep/60 to-night/60',
      placeholder: '沙爹',
      emoji: '🍢',
    },
    {
      name: '娘惹糕',
      nameEn: 'Nyonya Kuih',
      price: '2-5/块',
      location: '豆蔻水 & 娘惹店 · 乔治市',
      time: '全天 · 早上去最新鲜',
      desc: '土生华人甜点，色彩斑斓的小糕点。 Kuih Tako（娘惹糕）、Kuih Bahulu（南乳糕），甜而不腻，配茶一绝。',
      tips: ['颜色鲜艳的才正宗', '椰丝馅最好吃', '配豆蔻水'],
      gradient: 'from-coral/60 to-sand/40',
      placeholder: '娘惹糕',
      emoji: '🍮',
    },
    {
      name: '咖喱面',
      nameEn: 'Curry Laksa',
      price: '7-10',
      location: '多春茶室 · Lebuh Hutton',
      time: '08:00-15:00',
      desc: '椰浆咖喱汤底，配粗黄面、豆卜、血蚶。浓郁的咖喱香混合椰奶的清甜，血蚶是灵魂点缀。',
      tips: ['加血蚶不要省', '咖喱汁要拌面', '配凉茶'],
      gradient: 'from-forest/60 to-ocean/40',
      placeholder: '咖喱面',
      emoji: '🍛',
    },
    {
      name: '云吞面',
      nameEn: 'Wonton Noodles',
      price: '6-9',
      location: '德盛茶餐室 · JalanTransfer',
      time: '07:00-14:00',
      desc: '港式云吞面的槟城版本。云吞皮薄馅大，猪肉虾仁馅，配脆口蛋面。汤底用猪骨熬，清甜回甘。',
      tips: ['云吞要大的', '面要选蛋面', '加卤汁更香'],
      gradient: 'from-sand-dark/60 to-ocean-deep/40',
      placeholder: '云吞面',
      emoji: '🥟',
    },
  ]

  return (
    <section id="foods" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-coral text-sm tracking-widest uppercase mb-4">10道必吃 · Must-Eat Foods</p>
          <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
            舌尖上的南洋<br />本地人带路的真实味道
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            不是网红推荐——是排队排出来的老字号。每一道都是罗拉亲测过的。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, index) => (
            <div key={index} className="group bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className={`aspect-[4/3] bg-gradient-to-br ${food.gradient} flex items-center justify-center relative`}>
                <span className="text-6xl">{food.emoji}</span>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="text-coral text-sm font-medium">{food.price} 马币</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif text-xl text-night">{food.name}</span>
                  <span className="text-text/40 text-sm">· {food.nameEn}</span>
                </div>
                <p className="text-text/60 text-sm leading-relaxed mb-4">{food.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {food.tips.map((tip, i) => (
                    <span key={i} className="text-xs bg-sand text-text/60 px-2 py-1 rounded-full">{tip}</span>
                  ))}
                </div>
                <div className="border-t border-sand pt-4">
                  <p className="text-text/50 text-xs mb-1">{food.location}</p>
                  <p className="text-text/40 text-xs">{food.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Food Tips Card */}
        <div className="mt-16 bg-night rounded-2xl p-8 md:p-12 text-white">
          <h3 className="font-serif text-2xl mb-8 text-center">💡 罗拉的美食提示</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🕐</div>
              <h4 className="font-serif text-lg mb-2">时间是关键</h4>
              <p className="text-white/60 text-sm">很多老店下午就收摊了。亚参叻沙周三休息，沙爹要到傍晚才出摊。出发前查好营业时间。</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💵</div>
              <h4 className="font-serif text-lg mb-2">只收现金</h4>
              <p className="text-white/60 text-sm">槟城街头美食大多数只收现金。准备好足够的马币，很多店不接受卡，更别说手机支付了。</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚶</div>
              <h4 className="font-serif text-lg mb-2">排队才正宗</h4>
              <p className="text-white/60 text-sm">看到队伍不要犹豫，那是在帮你筛选。破旧小店才是美食的发源地，装修好的都是游客店。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-night mb-6">
          想跟罗拉一起觅食吗？
        </h2>
        <p className="text-text/60 mb-8 max-w-xl mx-auto">
          不是导游，是老友。带你吃本地人排队的那些店——不是网红打卡点，是舌尖上的槟城。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-coral text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-coral-deep transition-colors"
          >
            预约老友向导
          </a>
          <a
            href="/itinerary"
            className="inline-block bg-night text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wider hover:bg-night/80 transition-colors"
          >
            查看5天4夜行程
          </a>
        </div>
      </div>
    </section>
  )
}

// Main Page Component
export default function FoodPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FoodIntroSection />
      <FoodSection />
      <CTASection />
    </main>
  )
}
