import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '互動系統實驗室',
  description: '高二理科：先用程式看見結果，再用 Arduino 控制硬件',
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
      { text: '單元一：程式基礎', link: '/unit-1-programming-basics/' },
      { text: '單元二：硬件輸出', link: '/unit-2-hardware-output/' },
      { text: '實驗資源', link: '/resources/' }
    ],
    sidebar: [
      { text: '課程導入', collapsed: false, items: [
        { text: '第 0 課：程式如何控制現實世界？', link: '/unit-0/lesson-00-code-controls-world' }
      ] },
      { text: '單元一：先讓程式說話', collapsed: false, items: [
        { text: '單元地圖與作品', link: '/unit-1-programming-basics/' },
        { text: '第 1 課：讓 Arduino 在螢幕上說話', link: '/unit-1-programming-basics/lesson-01-serial-output' },
        { text: '第 2 課：用變數保存和計算資料', link: '/unit-1-programming-basics/lesson-02-variables-and-calculation' },
        { text: '第 3 課：用 if 讓程式按情況決定', link: '/unit-1-programming-basics/lesson-03-if-else' },
        { text: '第 4 課：用循環重複有規律的工作', link: '/unit-1-programming-basics/lesson-04-for-loop' },
        { text: '第 5 課：把重複工作交給一個函式', link: '/unit-1-programming-basics/lesson-05-functions-and-comments' },
        { text: '第 6 課：程式不如預期時，怎樣找問題？', link: '/unit-1-programming-basics/lesson-06-debug-code' },
        { text: '第 7 課：完成一個課室環境狀態報告', link: '/unit-1-programming-basics/lesson-07-status-report' }
      ] },
      { text: '單元二：讓硬件回應程式', collapsed: false, items: [
        { text: '單元地圖與作品', link: '/unit-2-hardware-output/' },
        { text: '第 8 課：把已驗證的程式帶進 Tinkercad', link: '/unit-2-hardware-output/lesson-01-first-circuit-simulation' },
        { text: '第 9 課：接好第一盞由程式控制的 LED', link: '/unit-2-hardware-output/lesson-02-safe-led-circuit' },
        { text: '第 10 課：把 if 的結果變成兩種燈號', link: '/unit-2-hardware-output/lesson-03-control-one-led' },
        { text: '第 11 課：讓提示燈按節奏工作', link: '/unit-2-hardware-output/lesson-04-blink-with-timing' },
        { text: '第 12 課：三盞燈，一個清楚的狀態系統', link: '/unit-2-hardware-output/lesson-05-traffic-light-states' },
        { text: '第 13 課：讓程式和接線都容易修改', link: '/unit-2-hardware-output/lesson-06-name-your-pins' },
        { text: '第 14 課：LED 不如預期時，怎樣找問題？', link: '/unit-2-hardware-output/lesson-07-debug-circuit' },
        { text: '第 15 課：設計一個校園提示系統', link: '/unit-2-hardware-output/lesson-08-campus-alert-project' }
      ] },
      { text: '實驗資源與作品', collapsed: true, items: [
        { text: '實驗資源', link: '/resources/' },
        { text: 'Tinkercad 截圖清單', link: '/resources/tinkercad-screenshot-list' },
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
