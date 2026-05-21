/**
 * 内容服务：飞书优先，本地兜底
 * 景点和美食数据
 */

// ============ 景点数据 ============
export interface Attraction {
  id: string
  title: string
  subtitle: string
  category: '景点'
  description: string
  tags: string[]
  location: string
  transport: string
  hours: string
  price: string
  highlights: string[]
  tips: string[]
  coverGradient: string
  isMock?: boolean
}

// ============ 美食数据 ============
export interface Food {
  id: string
  title: string
  subtitle: string
  category: '美食'
  description: string
  tags: string[]
  address: string
  hours: string
  price: string
  mustTry: string[]
  tips: string[]
  coverGradient: string
  isMock?: boolean
}

// ============ 行程数据 ============
export interface DayPlan {
  day: number
  title: string
  tag: string
  tagColor: string
  description: string
  highlights: string[]
  bgColor: string
}

// ============ MOCK 数据（本地兜底） ============
export const MOCK_ATTRACTIONS: Attraction[] = [
  {
    id: 'clan-jetty',
    title: '姓氏桥',
    subtitle: 'Chetty\'s Clan Jetty',
    category: '景点',
    description: '海上漂流百年的华人村落，最后的槟城秘境。水上高脚木屋，涨潮时房子像漂浮在海上。本地人叫它"姓氏桥"——因为每座桥住的是一个姓的人。',
    tags: ['📍 免费', '⏰ 8-10点最佳', '📸 水上倒影'],
    location: 'Chetty\'s Clan Jetty，切蒂族桥',
    transport: 'CAT免费巴士到Lebuh Amen止，步行8分钟',
    hours: '全天开放（建议早上去）',
    price: '免费',
    highlights: ['桥头全景：木屋层层叠叠', '水中倒影：退潮时蹲低角度拍倒影', '居民日常：晾衣服的阿婆、猫、门口的花', '日落时分：金色光线打在木屋上'],
    tips: ['这是居民区！不是景点！请放低音量', '不要随意进入居民家中', '桥上有几家卖纪念品的小店'],
    coverGradient: 'from-ocean/50 to-ocean-deep/50',
  },
  {
    id: 'penang-hill',
    title: '升旗山',
    subtitle: 'Penang Hill · 海拔821米',
    category: '景点',
    description: '俯瞰整个槟城的最佳视角。从山上看到的那一眼——整个槟城在脚下铺开，海峡、老城、远山全部在眼前。那一刻会突然理解，为什么马来西亚叫"大马"。',
    tags: ['💰 30马币往返', '⏰ 2-3小时', '🚠 坐右边风景'],
    location: 'Penang Hill，Air Itam',
    transport: '打车/Bolt到升旗山门口；或405路公交',
    hours: '5:30-23:00',
    price: '成人30马币（往返）',
    highlights: ['小火车上山（坐右边有风景）', '印度庙方向观景台', 'Hutanodge观景台人最少视野最正', '山顶咖啡馆等日落'],
    tips: ['不要在山脚买雨衣', '小火车最晚一班21:30', '周末和节假日人多，建议工作日去', '山顶气温比山下低5度，带薄外套'],
    coverGradient: 'from-forest/50 to-night/50',
  },
  {
    id: 'street-art',
    title: '乔治市街头艺术',
    subtitle: 'George Town Street Art',
    category: '景点',
    description: '整条街都是画廊。找"Little Children on a Bicycle"，配套场景互动拍照。打开Locus APP离线壁画地图，骑电动车或走路穿梭在老城区。',
    tags: ['📍 免费', '🛵 建议骑车', '📸 侧拍/斜拍'],
    location: 'Ah Quee Street / Lebuh Armenian',
    transport: 'Google Map搜壁画名；下载Locus APP',
    hours: '全天',
    price: '免费',
    highlights: ['Little Children on a Bicycle', '荡秋千的小女孩', 'Lebuh Armenian → Lebuh Ah Quee → Lebuh Chulia路线'],
    tips: ['早上9点前去人少好拍照', '壁画会被摊贩或停的车挡住', '强推路线沿途有独立咖啡馆可休息'],
    coverGradient: 'from-coral/50 to-coral-deep/50',
  },
  {
    id: 'batu-ferringhi',
    title: '巴都丁宜海滩',
    subtitle: 'Batu Ferringhi Beach',
    category: '景点',
    description: '槟城最著名的海滩，7点05分的日落是绝对不能错过的。天空从鹅黄→橘红→粉紫→深紫，颜色是一层一层叠上去的——不是渐变是"叠变"！',
    tags: ['🏖️ 海滩', '🌅 日落', '🍤 海鲜'],
    location: 'Batu Ferringhi，槟城北部',
    transport: '打车/Bolt，或Rapid Penang 101/102/104',
    hours: '全天',
    price: '免费',
    highlights: ['Parasailing高空拖伞', 'Banana boat香蕉船', 'Beach horse riding骑马', 'Bora Bora海滩酒吧', '夜市'],
    tips: ['日落在7点左右，建议5点到占据好位置', '蚊虫较多，带好防蚊', 'Hard Rock Hotel外海滩沙质最干净'],
    coverGradient: 'from-ocean/60 to-sand/40',
  },
  {
    id: 'kek-si',
    title: '极乐寺',
    subtitle: 'Kek Lok Si Temple',
    category: '景点',
    description: '东南亚最大观音庙，拥有七层高佛塔和巨大观音像。缆车登山，视野绝佳。是东南亚最重要的佛教圣地之一。',
    tags: ['🏛️ 寺庙', '🙏 观音像', '🚡 缆车登山'],
    location: 'Kek Lok Si，Air Itam',
    transport: '打车/Bolt，或405路公交到Air Itam',
    hours: '6:00-21:00',
    price: '免费（部分设施收费）',
    highlights: ['七层高佛塔', '巨大观音像', '缆车登山看全景', '放生池'],
    tips: ['建议下午去，光线好', '素食餐厅在寺庙旁边', '穿着要得体（遮住膝盖和肩膀）'],
    coverGradient: 'from-forest/60 to-night/40',
  },
  {
    id: 'botanic-garden',
    title: '植物园 & 蝴蝶园',
    subtitle: 'Penang Botanic Gardens',
    category: '景点',
    description: '槟城植物园依山而建，原始森林气息浓厚。蝴蝶园与热带昆虫亲密接触，是亲子游和自然爱好者必去的地方。',
    tags: ['🦋 蝴蝶园', '🌿 植物园', '📸 生态摄影'],
    location: 'Penang Botanic Gardens，Jalan Keruing',
    transport: '打车/Bolt，或103路公交',
    hours: '5:30-20:00（蝴蝶园9:00-18:00）',
    price: '植物园免费；蝴蝶园30马币',
    highlights: ['原始森林步道', '大莲花池', '蝴蝶园几千只蝴蝶', '和各种热带昆虫互动'],
    tips: ['建议早上去，动物比较活跃', '带防蚊水', '穿舒适的徒步鞋'],
    coverGradient: 'from-forest/80 to-ocean-deep/40',
  },
]

export const MOCK_FOODS: Food[] = [
  {
    id: 'asam-laksa',
    title: '亚参叻沙',
    subtitle: 'Asam Laksa · 马来西亚国汤',
    category: '美食',
    description: '酸→辣→鲜→香，层次爆炸。汤底用新鲜鱼骨熬，不粉冲。酸来自罗望子（asam），辣来自辣椒膏，一口下去整个人都被唤醒。',
    tags: ['🏆 西刀口天花板', '💰 8-12马币', '🕐 10-17点'],
    address: '头条亚参叻沙，Lebuh Situt Kechil',
    hours: '10:00-17:00（卖完就关门，周三休息）',
    price: '8-12马币/碗',
    mustTry: ['经典亚参叻沙', '加豆腐卜', '加鱼丸', 'Teh O Ais（冰茶）解辣'],
    tips: ['饭点可能要排队30分钟', '下午去！早上食材最新鲜', '不要加太多辣椒膏，先尝原味'],
    coverGradient: 'from-ocean/60 to-forest/40',
  },
  {
    id: 'char-kway-teow',
    title: '炒粿条',
    subtitle: 'Char Kway Teow · 米其林推荐',
    category: '美食',
    description: '马来西亚"国炒"。猛火快炒，锅气十足，每一根粿条都裹着酱香。2023年米其林推荐！加一颗生鸡蛋黄，拌进去，香味翻倍。',
    tags: ['🏆 米其林推荐', '💰 8-12马币', '🥚 加生蛋黄'],
    address: '兴发茶餐室，Lebuh Quee（皇后城对面）',
    hours: '12:00-18:00（卖完就关）',
    price: '8-12马币/碟',
    mustTry: ['经典炒粿条+生蛋黄', 'Teh Tarik（拉茶）', '辣椒酱+甜酱油混合蘸着吃'],
    tips: ['下午两点就可能卖完！要去赶早', '不在主街，问路要说"皇后城对面那条巷子"', '只收现金'],
    coverGradient: 'from-sand-dark/60 to-coral/40',
  },
  {
    id: 'sultan-b四大天王',
    title: '汕头街四大天王',
    subtitle: 'Jalan Macalister · 深夜食堂',
    category: '美食',
    description: '本地人的深夜食堂。几十个摊位一字排开，灯火通明。四大天王：权记鸭肉粿条汤 + 天皇鸡饭 + 好姨海南咖啡 + 煎蕊冰。',
    tags: ['🍜 粿条汤', '🍗 海南鸡饭', '🧋 煎蕊冰'],
    address: 'Jalan Macalister，汕头街',
    hours: '18:00-23:00',
    price: '15-25马币/人',
    mustTry: ['权记鸭肉粿条汤+烧鸭', '天皇海南鸡饭', '好姨Teh Tarik+咖椰吐司', 'Classic Cendol煎蕊冰'],
    tips: ['部分摊位只收现金', '周五周六人爆炸多，建议平时去', '不要穿白衣服，油烟有点大'],
    coverGradient: 'from-coral/60 to-night/40',
  },
  {
    id: 'durian',
    title: '榴莲',
    subtitle: 'Durian · 水果之王',
    category: '美食',
    description: '马来西亚榴莲是全世界最甜的！槟城产地直供，品种多样（D24、红虾、青海王）。每年6-8月是旺季，街头到处都是榴莲摊。',
    tags: ['🦐 时令（6-8月）', '💰 10-30马币', '⚠️ 不喝酒后吃'],
    address: '浮罗池滑路榴莲摊 / 汕头街夜市',
    hours: '18:00-23:00',
    price: '10-30马币/斤（视品种）',
    mustTry: ['D24（最经典）', '红虾（肉深红色）', '青海王（肉大）', '山竹（吃完配着吃降火）'],
    tips: ['选果农帮忙挑，别自己乱选', '吃榴莲不喝酒，会上火', '带湿纸巾，吃完擦手'],
    coverGradient: 'from-forest/60 to-sand/40',
  },
  {
    id: 'bak-kut-teh',
    title: '肉骨茶',
    subtitle: 'Bak Kut Teh · 潮汕风味',
    category: '美食',
    description: '潮汕肉骨茶，汤底用蒜头、党参、当归等中药材熬制，味道浓郁。油条蘸汤吃是灵魂！早餐配一碗白粥，绝配。',
    tags: ['🍲 早餐', '💰 8-15马币', '🌿 中药汤底'],
    address: '汕香苑茶室 / 姓氏桥附近',
    hours: '6:00-12:00（早餐限定）',
    price: '8-15马币/人',
    mustTry: ['肉骨茶汤底', '油条蘸汤', '猪肚、肉片', '白粥配菜'],
    tips: ['早餐去人少', '认准"肉骨茶"招牌', '吃完多喝水，上火'],
    coverGradient: 'from-ocean/60 to-sand/40',
  },
  {
    id: 'satay-curry-mee',
    title: '沙爹咖喱面',
    subtitle: 'Satay Curry Mee · 国民面食',
    category: '美食',
    description: '椰浆咖喱汤底配黄面，配料丰富（虾仁、鱼丸、豆腐卜）。沙爹酱是灵魂，浓郁的花生香加微微辣。槟城人从小吃到大。',
    tags: ['🍜 国民面食', '🥜 沙爹酱灵魂', '💰 8-12马币'],
    address: '多春茶室 / 汕头街',
    hours: '7:00-14:00',
    price: '8-12马币/碗',
    mustTry: ['经典咖喱面+黄面', '加料（虾仁、鱼丸）', '配Teh O冰茶'],
    tips: ['早上7-10点去人最多', '可以要求少辣', '分量偏小，可以加面'],
    coverGradient: 'from-coral/60 to-sand/40',
  },
]

export const MOCK_ITINERARY: DayPlan[] = [
  {
    day: 1,
    title: '抵达 + 适应',
    tag: '轻松',
    tagColor: 'bg-blue-100 text-blue-600',
    description: '入住乔治市Muntri Lane附近（走路到所有景点），下午闲逛老街熟悉环境，傍晚姓李桥看日落，晚上汕头街吃四大天王。',
    highlights: ['🏨 Muntri Lane', '🌅 姓李桥日落', '🍜 汕头街夜市'],
    bgColor: 'bg-blue-500',
  },
  {
    day: 2,
    title: '文化遗产日',
    tag: '文化',
    tagColor: 'bg-orange-100 text-orange-600',
    description: '上午娘惹博物馆（提前买票！），午餐对面印度庙素食，下午邱公司 + 周围壁画，傍晚爱情巷散步。',
    highlights: ['🏛️ 娘惹博物馆', '🖼️ 邱公司', '💕 爱情巷'],
    bgColor: 'bg-orange-500',
  },
  {
    day: 3,
    title: '自然风光日',
    tag: '自然',
    tagColor: 'bg-green-100 text-green-600',
    description: '升旗山看日出（5点出发！），回笼觉到中午，下午植物园 + 蝴蝶园，傍晚巴都丁宜海滩等日落。',
    highlights: ['⛰️ 升旗山日出', '🦋 蝴蝶园', '🏖️ 巴都丁宜'],
    bgColor: 'bg-green-500',
  },
  {
    day: 4,
    title: '深度美食日',
    tag: '美食',
    tagColor: 'bg-red-100 text-red-600',
    description: '上午Papparich国民早餐，下午深入汕头街小吃，傍晚探索隐秘茶餐室，晚上加尔维斯顿巧克力工厂（看巧克力制作）。',
    highlights: ['☕ Papparich', '🍜 汕头街深度', '🍫 巧克力工厂'],
    bgColor: 'bg-red-500',
  },
  {
    day: 5,
    title: '购物 + 离开',
    tag: '收尾',
    tagColor: 'bg-gray-100 text-gray-600',
    description: '上午葛尼广场购物 or 机场免税店，午餐最后一碗叻沙，带着满满的回忆离开。',
    highlights: ['🛍️ 葛尼广场', '🍜 最后一口叻沙', '✈️ 回家'],
    bgColor: 'bg-gray-500',
  },
]

// ============ 飞书文档数据拉取 ============
const FEISHU_TOKEN = 't-g1045klXYIJ5RW3F4CLTOGQ4ZGNFFEEXWFZDENV5'
const FEISHU_DOC_ID = 'JiKCdkeAEoSRj6xc3Vdckskengf'

export async function fetchFromFeishu(): Promise<{ attractions: Attraction[], foods: Food[], itinerary: DayPlan[] }> {
  try {
    const resp = await new Promise<any>((resolve, reject) => {
      wx.request({
        url: `https://open.feishu.cn/open-apis/doc/v2/documents/${FEISHU_DOC_ID}/blocks`,
        header: {
          Authorization: `Bearer ${FEISHU_TOKEN}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
        success: resolve,
        fail: reject,
      })
    })
    if (resp.statusCode === 200 && resp.data?.code === 0) {
      // 解析飞书文档blocks，提取内容
      // 这里简化处理，实际需要根据文档结构解析
      return parseFeishuBlocks(resp.data?.data?.items || [])
    }
    throw new Error(`Feishu API error: ${resp.data?.msg || resp.statusCode}`)
  } catch (err) {
    console.warn('[ContentService] Feishu fetch failed, using mock data:', err)
    return {
      attractions: MOCK_ATTRACTIONS,
      foods: MOCK_FOODS,
      itinerary: MOCK_ITINERARY,
    }
  }
}

function parseFeishuBlocks(blocks: any[]): { attractions: Attraction[], foods: Food[], itinerary: DayPlan[] } {
  // 飞书文档block解析逻辑
  // 目前返回mock，实际根据文档结构实现
  return {
    attractions: MOCK_ATTRACTIONS,
    foods: MOCK_FOODS,
    itinerary: MOCK_ITINERARY,
  }
}

// ============ 统一获取内容（飞书优先，本地兜底） ============
let cachedData: { attractions: Attraction[], foods: Food[], itinerary: DayPlan[] } | null = null

export async function getContent(): Promise<{ attractions: Attraction[], foods: Food[], itinerary: DayPlan[] }> {
  if (cachedData) return cachedData

  const data = await fetchFromFeishu()
  cachedData = data
  return data
}

export async function getAttractions(): Promise<Attraction[]> {
  const data = await getContent()
  return data.attractions
}

export async function getFoods(): Promise<Food[]> {
  const data = await getContent()
  return data.foods
}

export async function getItinerary(): Promise<DayPlan[]> {
  const data = await getContent()
  return data.itinerary
}
