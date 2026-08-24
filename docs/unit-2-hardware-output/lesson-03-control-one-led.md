# 第 8 課：讓 Arduino 控制一盞燈

## 今課可以做到甚麼？

- 用程式讓 Arduino 決定 LED 亮起或熄滅。
- 使用 `pinMode()` 設定輸出腳位。
- 使用 `digitalWrite()` 輸出 `HIGH` 或 `LOW`。

## 開始前：想一想

上一課的 LED 一接上 5V 就一直亮。假如你想指定「現在亮」或「現在熄」，誰來替你改變電路狀態？

答案是 Arduino 的數位腳位。程式可以把它設定為輸出，然後送出高或低的電平。

## 新概念：數位輸出

![程式控制數位腳位](/images/digital-output.svg)

本課把 LED 的正極改接到 **8 號腳位**，LED 負極仍經電阻回到 GND。`HIGH` 可先理解成「這個腳位輸出開啟訊號」，`LOW` 是「輸出關閉訊號」。

## 跟著做：亮燈

```cpp
void setup() {
  pinMode(8, OUTPUT);
  digitalWrite(8, HIGH);
}

void loop() {
}
```

**預期效果：** 開始模擬後，LED 亮起並保持亮著。

逐行看：

- `void setup()`：模擬開始時先執行一次的地方。
- `pinMode(8, OUTPUT);`：告訴 Arduino，8 號腳位要負責輸出訊號。
- `digitalWrite(8, HIGH);`：把 8 號腳位設為高電平，讓 LED 亮起。
- `void loop()`：之後會不斷重複的地方；目前還沒有需要重複做的事。

## 再試一次：熄燈

只改一個字：把 `HIGH` 改成 `LOW`。

```cpp
  digitalWrite(8, LOW);
```

**預期效果：** LED 熄滅。程式、接線和腳位號碼不變，只有輸出狀態改變。

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| LED 接在 8 號腳位，程式卻寫 9 | 電路和程式不一致 | 兩邊統一使用同一個腳位 |
| 忘記 `pinMode()` | Arduino 未知道這是輸出腳位 | 在 `setup()` 先設為 `OUTPUT` |
| 把 `HIGH` 寫成 `High` | 程式區分大小寫 | 使用全大寫 `HIGH`、`LOW` |
| 把 `digitalWrite()` 放錯大括號外 | 指令不在函式內 | 確認每行指令位於 `setup()` 或 `loop()` 內 |

## 你來做

- **基礎題**：讓 8 號腳位控制一盞 LED 亮起。
- **標準題**：把 LED 改接到 7 號腳位，並同步修改程式。
- **挑戰題**：用自己的話解釋 `pinMode()` 與 `digitalWrite()` 的分工。

## 本課小結

- Arduino 的數位腳位可以由程式控制輸出。
- `pinMode()` 先定義腳位用途；`digitalWrite()` 才設定狀態。
- 接線腳位與程式腳位必須完全一致。

## 離堂前 3 分鐘

1. `OUTPUT` 表示 Arduino 要接收訊號，還是送出訊號？
2. 想讓 LED 熄滅，要把哪個字改成甚麼？
