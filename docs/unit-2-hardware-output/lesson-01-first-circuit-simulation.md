# 第 8 課：把已驗證的程式帶進 Tinkercad

## 今課可以做到甚麼？

- 建立一個 Tinkercad Circuits 專案，並切換到文字程式模式。
- 在新 Circuit 重現單元一的 Serial Monitor 輸出。
- 知道硬件加入前，先確認程式在新環境可以開始模擬。

## 開始前：想一想

你在單元一已完成「課室環境狀態報告」。現在打開一個新 Tinkercad Circuit，最先應該把 LED 接進去，還是先看看原本程式能否運行？

工程實作不會一次改掉所有東西。先把已知可用的部分重現，才知道之後新增的問題來自哪裡。

## 同一段規則，先在新環境確認一次

單元一的結果仍是本單元的起點：

~~~text
狀態：溫度偏高，建議通風
~~~

<div class="tinkercad-shot" role="note">
  <span class="tinkercad-shot__tag">待補 Tinkercad 截圖 A</span>
  <strong>一個只有 Arduino Uno 的 Circuit</strong>
  <p>畫面要同時看見：Text 程式模式、Start Simulation 後的 Serial Monitor，以及至少一行狀態輸出。</p>
  `建議檔名：lesson-08-serial-bridge.png`
</div>

## 跟著做：先重現文字結果

1. 進入 **Tinkercad → Circuits → Create new Circuit**。
2. 拖入 **Arduino Uno R3**；今天暫時不用加入 LED。
3. 按 **Code**，把模式改為 **Text**。
4. 貼上下面程式，按 **Start Simulation**，再打開 **Serial Monitor**。
5. 將 Circuit 改名為「姓名_狀態報告到燈號」。

~~~cpp
float temperature = 28.5;
bool classInUse = true;

void setup() {
  Serial.begin(9600);
  if (temperature > 26 && classInUse) {
    Serial.println("狀態：溫度偏高，建議通風");
  } else {
    Serial.println("狀態：暫時不需要通風提示");
  }
}

void loop() {
}
~~~

**預期輸出：** `狀態：溫度偏高，建議通風`。

## 再試一次：改變資料，而不是改變規則

把 `bool classInUse = true;` 改成 `bool classInUse = false;`。確認文字會變成「暫時不需要通風提示」。這一步證明程式規則仍正常；下一課才把結果輸出到 LED。

## 易錯位

| ✕ 錯誤 | 原因 | 修正方法 |
| --- | --- | --- |
| 還在 Blocks 模式，卻貼上文字程式 | 積木模式不適合直接貼 C++ 程式 | 在 Code 視窗選擇 Text |
| 忘記按 Start Simulation | 程式尚未開始 | 按開始模擬後才開 Serial Monitor |
| 未加入 `Serial.begin(9600);` | 文字輸出未準備好 | 在 `setup()` 加入這一行 |
| 一開始同時貼新程式、接 LED、改接線 | 出問題時很難找原因 | 今天只確認文字結果；LED 留待下一課 |

## 你來做

- **基礎題**：成功在 Tinkercad 顯示一行自己的狀態文字。
- **標準題**：把第 7 課的完整報告貼進去，確認可開始模擬。
- **挑戰題**：將 `temperature` 改成 25.0，預測並驗證畫面會顯示哪個狀態。

## 本課小結

- 先把已驗證的程式帶到新環境，再加入新硬件。
- Serial Monitor 仍是本單元的重要檢查工具。
- 下一課只會新增一件事：讓一盞 LED 由程式控制。

## 離堂前 3 分鐘

1. 為甚麼今天不急著接 LED？
2. Start Simulation 前後，Serial Monitor 有甚麼不同？
3. 改成 `classInUse = false` 後，應該看到哪一句？
