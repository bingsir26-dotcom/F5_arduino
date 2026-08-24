# 第 3 課：用 if 讓程式按情況決定

## 今課可以做到甚麼？

- 讓程式根據資料顯示不同提示。
- 用 `bool` 記錄「是／否」狀態。
- 用 `&&` 和 `||` 表示兩個條件同時成立，或其中一個成立即可。

## 開始前：想一想

課室溫度是 28.5°C，但課室沒有人；此時應否顯示「建議通風」？同一個數值不一定永遠得出同一個結果。程式要把條件寫清楚，才不會靠猜。

## 讓程式在不同情況下說不同話

![if 與 else 的條件判斷](/images/if-else-condition.svg)

`if` 的意思是「如果條件成立，就做這件事」；`else` 是「否則，做另一件事」。`bool` 只有兩種值：`true`（是）和 `false`（否）。

## 跟著做：溫度與是否有人

~~~cpp
float temperature = 28.5;
bool classInUse = true;

void setup() {
  Serial.begin(9600);
  if (temperature > 26 && classInUse) {
    Serial.println("課室有人，而且溫度偏高：建議通風");
  } else {
    Serial.println("暫時不需要通風提示");
  }
}

void loop() {
}
~~~

**預期輸出：** `課室有人，而且溫度偏高：建議通風`。

- `classInUse = true`：記錄課室正在使用。
- `temperature > 26`：檢查溫度是否偏高。
- `&&`：左右兩邊條件都要是 `true`，整句才成立。

## 再試一次：只改一個條件

把 `bool classInUse = true;` 改成 `bool classInUse = false;`。即使溫度仍是 28.5，畫面會顯示「暫時不需要通風提示」。

若要表示「溫度偏高 **或** 座位接近滿」，可寫：

~~~cpp
if (temperature > 26 || usedSeats > 25) {
~~~

`||` 代表左右其中一個條件成立即可。

## 易錯位

| ✕ 錯誤 | 原因 | 修正方法 |
| --- | --- | --- |
| `if temperature > 26` | 條件要放在括號內 | 寫成 `if (temperature > 26)` |
| `if (classInUse = true)` | `=` 是放入資料 | 直接寫 `if (classInUse)`，或用 `==` 比較 |
| 用 `and`、`or` | Arduino C++ 使用符號 | 同時成立用 `&&`；其中一個成立用 `||` |
| `True` | 程式區分大小寫 | 使用小寫 `true`、`false` |

## 你來做

- **基礎題**：溫度大於 26 時顯示「溫度偏高」，否則顯示「溫度合適」。
- **標準題**：加入 `classInUse`，只有有人而且溫度偏高才提示。
- **挑戰題**：加入 `usedSeats`，用 `||` 設計注意提示。

## 本課小結

- `if ... else` 讓程式依條件選擇不同結果。
- `bool` 保存只有「是／否」的狀態。
- `&&` 表示同時成立；`||` 表示其中一個成立。

## 離堂前 3 分鐘

1. `bool doorOpen = false;` 表示甚麼？
2. `&&` 和 `||` 的分別是甚麼？
3. 溫度 28.5、`classInUse = false` 時會顯示哪一句？
