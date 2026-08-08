# 第 6 課：讓程式更容易修改

## 今課可以做到甚麼？

- 用 `const int` 為腳位資料設定名稱。
- 修改接線時，只改一個地方就能更新程式。
- 由變數名稱讀懂一段 Arduino 程式在控制甚麼。

## 開始前：想一想

如果一段程式有十多次 `digitalWrite(8, ...)`，後來你把綠燈改接到 6 號腳位，要逐行找出所有 `8` 嗎？

當數字代表某一個意義時，為它取一個名字，程式會更容易閱讀和修改。

## 新概念：給腳位貼上標籤

![腳位名稱與電路對應](/images/pin-names.svg)

```cpp
const int greenLed = 8;
```

這句話把 `greenLed` 設定成 8。之後寫 `digitalWrite(greenLed, HIGH)`，讀者看見的是「讓綠燈亮」，不用先猜 8 代表甚麼。

`const` 表示這個設定值不應在程式中被改動；`int` 表示它是整數。

## 跟著做：把魔法數字改成名稱

```cpp
const int greenLed = 8;
const int yellowLed = 9;
const int redLed = 10;

void setup() {
  pinMode(greenLed, OUTPUT);
  pinMode(yellowLed, OUTPUT);
  pinMode(redLed, OUTPUT);
}
```

程式的行為沒有改變，但讀者更容易知道每個腳位的用途。

## 再試一次：修改一個接線設定

把綠燈由 8 號腳位改到 6 號腳位，只修改這一行：

```cpp
const int greenLed = 6;
```

只要電路也同步改線，其餘控制綠燈的程式不用逐行修改。

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| 名稱寫成 `green led` | 變數名稱不能有空格 | 用 `greenLed` 或 `green_led` |
| 宣告名稱是 `greenLed`，使用時寫 `greenLED` | 英文字母大小寫不同 | 全程使用同一個名稱 |
| 仍然到處混用 8 和 `greenLed` | 容易漏改或誤用 | 腳位設定集中在程式開頭 |
| 把 `const int` 放進 `loop()` | 每次重複宣告沒有必要 | 放在函式外，成為整段程式的設定 |

## 你來做

- **基礎題**：為三盞 LED 加上名稱。
- **標準題**：把紅燈移到 11 號腳位，只改設定和接線。
- **挑戰題**：替「圖書館安靜提示」設計 `quietLed`、`busyLed` 等名稱。

## 本課小結

- 名稱把數字變成有意思的設定。
- `const int` 適合保存不應在程式中改變的腳位編號。
- 好名稱能減少修改錯誤，也讓別人較容易接手你的程式。

## 離堂前 3 分鐘

1. `greenLed` 代表什麼？
2. 如果只改了程式的腳位名稱，但沒有改電路，可能會發生甚麼？
