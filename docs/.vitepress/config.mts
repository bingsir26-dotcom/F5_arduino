import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '互動系統實驗室',
  description: '高二理科：從一盞燈開始，設計會回應的 Arduino 系統',
  base: '/F5_arduino/',
  lang: 'zh-Hant',
  lastUpdated: true,
  vite: { server: { watch: { ignored: ['**/.vitepress/dist/**'] } } },
  themeConfig: {
    logo: '/images/circuit-mark.svg',
    siteTitle: '互動系統實驗室',
    nav: [
      { text: '課程首頁', link: '/' },
      { text: '第 0 課開始', link: '/unit-0/lesson-00-code-controls-world' },
      { text: '實驗資源', link: '/resources/' }
    ],
    sidebar: [
      { text: '課程導入', collapsed: false, items: [
        { text: '第 0 課：程式如何控制現實世界？', link: '/unit-0/lesson-00-code-controls-world' }
      ] },
      { text: '單元一：讓裝置動起來', collapsed: false, items: [
        { text: '單元地圖與作品', link: '/unit-1-arduino-output/' },
        { text: '第 1 課：第一個電路模擬', link: '/unit-1-arduino-output/lesson-01-first-circuit-simulation' },
        { text: '第 2 課：讓 LED 安全亮起來', link: '/unit-1-arduino-output/lesson-02-safe-led-circuit' },
        { text: '第 3 課：讓 Arduino 控制一盞燈', link: '/unit-1-arduino-output/lesson-03-control-one-led' },
        { text: '第 4 課：讓燈按節奏工作', link: '/unit-1-arduino-output/lesson-04-blink-with-timing' },
        { text: '第 5 課：三盞燈，一個交通燈系統', link: '/unit-1-arduino-output/lesson-05-traffic-light-states' },
        { text: '第 6 課：讓程式更容易修改', link: '/unit-1-arduino-output/lesson-06-name-your-pins' },
        { text: '第 7 課：裝置不動時，怎樣找問題？', link: '/unit-1-arduino-output/lesson-07-debug-circuit' },
        { text: '第 8 課：設計一個校園提示系統', link: '/unit-1-arduino-output/lesson-08-campus-alert-project' }
      ] },
      { text: '實驗資源與作品', collapsed: true, items: [
        { text: '實驗資源', link: '/resources/' },
        { text: '作品交付格式', link: '/projects/' }
      ] }
    ],
    outline: { level: [2, 3], label: '本課內容' },
    search: { provider: 'local' },
    docFooter: { prev: '上一課', next: '下一課' },
    returnToTopLabel: '回到頁首', sidebarMenuLabel: '課程目錄',
    darkModeSwitchLabel: '顯示模式', lightModeSwitchTitle: '切換至淺色模式', darkModeSwitchTitle: '切換至深色模式',
    lastUpdated: { text: '更新日期' }
  }
})

