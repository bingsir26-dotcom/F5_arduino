# Tinkercad 截圖清單

這些圖片由教師在真實 **Tinkercad Circuits** 擷取，比抽象示意圖更能幫學生對照元件、腳位與程式位置。課文已留有「待補 Tinkercad 截圖」位置；截圖完成後，可放到 `docs/public/images/tinkercad/`，再在課文插入相應圖片。

## 截圖原則

- 先按 **Start Simulation**，確保畫面真的是可運行的狀態。
- 一張圖只解答一個重點：不要同時塞入過多程式、接線和說明。
- 電阻數值、Arduino 腳位和 LED 狀態要看得清楚。
- 導線盡量整理成直線或有規律的顏色；同一類功能可使用一致顏色。
- 如畫面包含帳戶名稱、學生姓名或私人資料，先裁掉。

## 需要拍的 7 張圖

| 課次 | 建議檔名 | 必須看見甚麼 | 課文中的用途 |
| --- | --- | --- | --- |
| 第 8 課 | `lesson-08-serial-bridge.png` | Arduino Uno、Text 模式、正在運行、Serial Monitor 至少一行狀態文字 | 證明先確認程式才接硬件 |
| 第 9 課 | `lesson-09-one-led-wiring.png` | D8、220 Ω／330 Ω 電阻、LED、GND；接線近圖 | 對照第一盞可程式控制 LED 的完整回路 |
| 第 10 課 | `lesson-10-if-to-two-leds.png` | 紅綠兩燈與各自電阻；其中一種狀態正在亮 | 對照 if ... else 變成兩種輸出 |
| 第 11 課 | `lesson-11-blink-and-log.png` | 亮起的 LED、delay(1000) 程式片段、Serial Monitor 的亮／熄紀錄 | 解釋截圖無法顯示動畫時如何留下證據 |
| 第 12 課 | `lesson-12-three-status-leds.png` | Arduino、三盞 LED、三個電阻、GND；只有一盞亮 | 顯示清楚的三狀態系統 |
| 第 14 課 | `lesson-14-debug-pin-check.png` | 程式 warningLed = 9 和導線接到 D9 可同時看見 | 教學生核對程式與接線 |
| 第 15 課 | `lesson-15-final-project.png` | 完整成品、整齊接線、正在亮起的一種狀態；可加 Serial Monitor | 作為學生最終作品展示參考 |

## 放入網站的方法

1. 在專案資料夾建立：`docs/public/images/tinkercad/`。
2. 將圖片用上表檔名存入該資料夾。
3. 例如在第 9 課預留位置下方加入：

```md
![D8 控制 LED 的 Tinkercad 接線圖](/images/tinkercad/lesson-09-one-led-wiring.png)
```

4. 已放入圖片後，建議刪除該課原本的「待補截圖」方框，畫面會更乾淨。
5. 本機執行 `npm run docs:build` 檢查，之後 `git add`、`git commit`、`git push`；GitHub Pages 會自動更新。

::: tip 不必每課都有圖
最值得優先拍的是第 9、10、12、15 課四張：它們分別解釋**一盞燈的接線、條件判斷、三燈狀態和最後作品**。
:::
