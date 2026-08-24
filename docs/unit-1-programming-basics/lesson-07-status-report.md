# 第 7 課：完成一個課室環境狀態報告

## 今課可以做到甚麼？

- 把變數、計算、條件判斷、循環和函式合成一個完整程式。
- 在 Serial Monitor 看見一段有根據的課室狀態報告。
- 說出下個單元可以把哪一個文字狀態轉成 LED 燈號。

## 開始前：想一想

程式顯示「溫度偏高」並不代表它已經有用。看到這句提示的人還需要知道：溫度是多少？課室有沒有人？這是第幾次檢查？今天會把資料、規則和結論整理成一段完整報告。

## 作品規則先寫清楚

| 資料／條件 | 本作品的規則 |
| --- | --- |
| 溫度 | 高於 26°C 視為偏高 |
| 課室是否使用中 | `classInUse = true` 代表有人使用 |
| 提示 | 只有「有人而且溫度偏高」才建議通風 |
| 重複 | 連續顯示 3 次，方便檢查結果是否一致 |

![文字狀態如何連到硬件](/images/status-report-to-hardware.svg)

## 跟著做：課室環境狀態報告

~~~cpp
float temperature = 28.5;
int totalSeats = 28;
int usedSeats = 26;
bool classInUse = true;

void printReport(int reportNumber) {
  int emptySeats = totalSeats - usedSeats;
  Serial.print("第 ");
  Serial.print(reportNumber);
  Serial.println(" 次檢查");
  Serial.print("溫度：");
  Serial.println(temperature);
  Serial.print("空位：");
  Serial.println(emptySeats);

  if (temperature > 26 && classInUse) {
    Serial.println("狀態：溫度偏高，建議通風");
  } else {
    Serial.println("狀態：暫時不需要通風提示");
  }
  Serial.println("---");
}

void setup() {
  Serial.begin(9600);
  for (int reportNumber = 1; reportNumber <= 3; reportNumber++) {
    printReport(reportNumber);
  }
}

void loop() {
}
~~~

**預期輸出（節錄）：**

~~~text
第 1 次檢查
溫度：28.50
空位：2
狀態：溫度偏高，建議通風
---
~~~

- 最上方變數保存資料。
- `printReport(...)` 把「印一次報告」整理成函式。
- `for` 由 1 數到 3，要求 Arduino 重複印出三次。

## 再試一次：改變資料，檢查規則

只改 `bool classInUse = false;`，輸出會改成「暫時不需要通風提示」。下一單元會保留同一條規則，只把文字結果換成燈號。

## 易錯位

| ✕ 錯誤 | 為甚麼 | 修正方法 |
| --- | --- | --- |
| 函式內用 `reportNumber`，但函式沒有收到它 | 函式不知道資料從哪來 | 寫成 `void printReport(int reportNumber)` |
| `for` 少了 `reportNumber++` | 數字不會前進 | 檢查第三部分 |
| 條件用 `||` | 只要其中一項成立便提示 | 本作品要同時成立，使用 `&&` |
| 少了大括號 | Arduino 不知道區域範圍 | 對照每個 `{` 是否都有 `}` |

## 你來做

- **基礎題**：改成自己的溫度和座位數，成功顯示三次報告。
- **標準題**：改變溫度門檻，說出原因。
- **挑戰題**：新增 `bool windowsOpen`；有人、溫度偏高而且窗戶未開時才提示。

## 本課小結

- 一個完整程式可由資料、計算、規則、函式和循環組成。
- 好的文字輸出讓人看見資料、規則和結論。
- 下一單元會把同一條規則轉換成硬件燈號。

## 離堂前 3 分鐘

1. 哪一條條件會顯示「建議通風」？
2. `for` 會呼叫 `printReport()` 幾次？
3. 若把「溫度偏高」轉成硬件回應，你會選哪種燈號？
