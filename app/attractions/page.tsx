export default function AttractionsPage() {
  const attractions = [
    {
      id: 1,
      name: "乔治市壁画",
      nameEn: "George Town Street Art",
      description: "穿梭于老街巷弄，寻找散落各处的立陶宛艺术家 Ernest Zacharevic 原创壁画。猫咪、姐弟单车、追风少年等作品已成为槟城最具人气的街头符号。",
      tags: ["街头艺术", "免费", "老城区"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      id: 2,
      name: "姓氏桥",
      nameEn: "Clan Jetties",
      description: "沿海而建的高脚木屋群，分为林氏、周氏、陈氏等十座姓氏桥。百年宗亲社群与海上生活形态，在这里延续至今。",
      tags: ["文化遗产", "摄影", "海上"],
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
    },
    {
      id: 3,
      name: "猴子沙滩",
      nameEn: "Monkey Beach",
      description: "位于槟城国家公园内的隐秘沙滩，需要徒步穿越森林才能抵达。野生长鼻猴在海岸边出没，是亲近自然的绝佳去处。",
      tags: ["国家公园", "徒步", "野生动物"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    },
    {
      id: 4,
      name: "小印度",
      nameEn: "Little India",
      description: "色彩斑斓的印度社区，空气中弥漫着香料与茉莉花的混合气息。莎丽店铺、印度庙、香火缭绕的祈祷声，让人仿佛瞬间穿越到南亚。",
      tags: ["印度文化", "美食", "购物"],
      image: "https://images.unsplash.com/photo-1585942400583-8dd5d07de25e?w=800&q=80",
    },
    {
      id: 5,
      name: "巴都丁宜",
      nameEn: "Batu Ferringhi",
      description: "槟城最热闹的海滩度假区，白色沙滩绵延，夜市摊位林立。水上摩托、香蕉船等海上活动丰富，也是品尝沙滩海鲜的好去处。",
      tags: ["海滩", "夜市", "水上运动"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    },
    {
      id: 6,
      name: "直落巴巷",
      nameEn: "Teluk Bahang",
      description: "安静的渔村海湾，远离游客喧嚣。这里有原生态的疍家渔排、美味的现烤海鲜，以及通往槟城国家公园的起点。",
      tags: ["渔村", "海鲜", "国家公园"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    },
    {
      id: 7,
      name: "红树林",
      nameEn: "Mangrove",
      description: "乘船穿梭于古老红树林之间，探访栖息于此的老鹰、巨蜥、水獭和珍稀海豚。泥滩上的招潮蟹与弹涂鱼，构成独特的潮间带生态系统。",
      tags: ["生态", "乘船", "野生动物"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    },
    {
      id: 8,
      name: "香料园",
      nameEn: "Spice Garden",
      description: "位于山坡上的热带香料园，种植着肉桂、胡椒、香茅、豆蔻等数十种香料。园区提供导览讲解，还可体验亲手制作咖喱。",
      tags: ["自然", "文化", "美食"],
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    },
    {
      id: 9,
      name: "榴莲庄园",
      nameEn: "Durian Plantation",
      description: "每逢榴莲季节，来自全马的顶级榴莲齐聚于此。猫山王、黑刺、红虾等品种现场开壳现吃，是榴莲爱好者不可错过的天堂。",
      tags: ["水果", "季节性", "美食"],
      image: "https://images.unsplash.com/photo-1563302111-eab4b145b6e4?w=800&q=80",
    },
    {
      id: 10,
      name: "海上渔排",
      nameEn: "Sea Fish Farm",
      description: "参观漂浮在海面上的大型养殖渔排，了解石斑、龙虾、鲈鱼等海水鱼的养殖过程。现场可品尝刚从渔网中捞起的鲜活海产。",
      tags: ["渔牧", "海鲜", "体验"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    },
    {
      id: 11,
      name: "升旗山",
      nameEn: "Penang Hill",
      description: "海拔821米的山顶观景台，乘坐百年历史的山顶缆车缓缓而上。日落时分的槟城全景与对面岛屿，壮丽非凡。山顶还有英式建筑群和印度庙。",
      tags: ["缆车", "日落", "历史建筑"],
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    },
    {
      id: 12,
      name: "极乐寺",
      nameEn: "Kek Lok Si Temple",
      description: "东南亚最大的华人佛寺，依山而建，层层递进。巨大的白色观音像耸立山腰，藏经楼、龟池、花塔构成宏伟的佛教建筑群。春节灯展尤为一绝。",
      tags: ["寺庙", "佛教", "建筑"],
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-night">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/50 to-night" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">
            探索槟城
          </h1>
          <p className="text-sand text-lg md:text-xl max-w-2xl mx-auto">
            从世界遗产老城到隐秘海滩，从热带雨林到山顶寺庙
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <article
              key={attraction.id}
              className="group bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-coral text-cream text-xs font-sans px-3 py-1 rounded-full">
                  #{attraction.id.toString().padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h2 className="font-serif text-2xl text-night leading-tight">
                    {attraction.name}
                  </h2>
                  <p className="font-sans text-ocean text-sm">{attraction.nameEn}</p>
                </div>

                <p className="font-sans text-text text-sm leading-relaxed mb-4">
                  {attraction.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {attraction.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-sand text-text text-xs font-sans px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-gradient-to-br from-ocean-deep to-ocean">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            准备好开启旅程了吗？
          </h2>
          <p className="font-sans text-sand mb-8">
            预订专属行程，让罗拉带你深入体验槟城的每一个角落
          </p>
          <a
            href="/itinerary"
            className="inline-block bg-coral hover:bg-coral/90 text-cream font-sans font-medium px-8 py-3 rounded-full transition-colors"
          >
            查看行程推荐
          </a>
        </div>
      </section>
    </div>
  );
}
