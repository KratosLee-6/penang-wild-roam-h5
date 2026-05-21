# Penang Wild Roam — 项目规范

## 配色 (Tailwind CSS)
- `night`: #1A1A2E (深色背景)
- `cream`: #FDF8F2 (浅色卡片背景)
- `coral`: #E07B54 (强调色/按钮)
- `sand`: #F5E6D3
- `sand-dark`: #E8D5BC
- `ocean`: #2B6A8E
- `ocean-deep`: #1D4E6A
- `forest`: #3D6B4F
- `text`: #2C2C2C

## 字体
- `font-serif`: Playfair Display (标题)
- `font-sans`: Noto Sans SC (正文)

## 常用 Tailwind 类
- 背景: `bg-night`, `bg-cream`, `bg-sand`, `bg-coral`
- 文字: `text-night`, `text-coral`, `text-text`
- 圆角: `rounded-2xl`, `rounded-full`, `rounded-lg`
- 间距: `px-6 md:px-12`, `py-20 md:py-28`
- 渐变: `bg-gradient-to-br from-X to-Y`

## 页面结构
- 导航栏: 固定顶部，滚动后毛玻璃效果
- Hero: 全屏，高度 `h-screen`
- 内容区: `max-w-7xl mx-auto px-6 md:px-12`
- Section间距: `py-20 md:py-28`

## 文件路径
- `app/layout.tsx` — 根布局
- `app/page.tsx` — 首页
- `app/attractions/page.tsx` — 景点
- `app/food/page.tsx` — 美食
- `app/itinerary/page.tsx` — 行程
- `app/info/page.tsx` — 实用信息
- `app/services/page.tsx` — 服务套餐
- `app/about/page.tsx` — 关于罗拉

## 素材 (来自首页已有内容)
- 景点: 乔治市壁画、姓氏桥、猴子沙滩、小印度、巴都丁宜、直落巴巷、红树林、香料园、榴莲庄园、海上渔排、升旗山、极乐寺
- 美食: 炒粿条、叻沙、榴莲、煎蕊、虾面、椰浆饭、沙爹、娘惹糕、咖喱面、云吞面
- 行程: 5天4晚 (每天: DAY标题 + 描述 + 标签pill)
