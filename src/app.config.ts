// Tab bar pages configuration
export default defineAppConfig({
  pages: [
    'pages/index/main',
    'pages/attractions/main',
    'pages/food/main',
    'pages/itinerary/main',
    'pages/mine/main',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '槟城野生漫游',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#e07a5f',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: 'assets/tab-home.png',
        selectedIconPath: 'assets/tab-home-active.png',
      },
      {
        pagePath: 'pages/attractions/main',
        text: '景点',
        iconPath: 'assets/tab-spot.png',
        selectedIconPath: 'assets/tab-spot-active.png',
      },
      {
        pagePath: 'pages/food/main',
        text: '美食',
        iconPath: 'assets/tab-food.png',
        selectedIconPath: 'assets/tab-food-active.png',
      },
      {
        pagePath: 'pages/itinerary/main',
        text: '行程',
        iconPath: 'assets/tab-trip.png',
        selectedIconPath: 'assets/tab-trip-active.png',
      },
      {
        pagePath: 'pages/mine/main',
        text: '我的',
        iconPath: 'assets/tab-mine.png',
        selectedIconPath: 'assets/tab-mine-active.png',
      },
    ],
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于提供更好的旅行推荐',
    },
  },
})
