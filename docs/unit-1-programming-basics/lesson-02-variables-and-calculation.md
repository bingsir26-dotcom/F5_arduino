# 第 2 課：用變數保存和計算資料

## 今課可以做到甚麼？

- 讓 Arduino 保存座位數、溫度等資料，再在 Serial Monitor 顯示。
- 用變數完成計算，不必每次手算答案。
- 分辨整數 `int` 和可保存小數的 `float`。

## 開始前：想一想

如果課室有 28 個座位、已坐了 23 人，程式怎樣知道還有多少空位？直接在很多地方寫數字，日後人數改變時很容易漏改。較好的做法是先替每個資料取一個清楚名字。

## 把資料交給程式記住

![變數、計算與文字輸出](/images/variables-and-output.svg)

`int` 用來保存人數、座位數等整數；`float` 用來保存 `28.5` 度等帶小數資料。變數讓程式可以之後再讀取、計算和顯示它。

## 跟著做：顯示課室資料

~~~cpp
int totalSeats = 28;
int usedSeats = 23;
int emptySeats = totalSeats - usedSeats;
float temperature = 28.5;

void setup() {
  Serial.begin(9600);
  Serial.print("空位數：");
  Serial.println(emptySeats);
  Serial.print("課室溫度：");
  Serial.println(temperature);
}

void loop() {
}
~~~

**預期輸出：**

~~~text
空位數：5
課室溫度：28.50
~~~

- `int emptySeats = totalSeats - usedSeats;`：用前兩個變數計算空位。
- `float temperature = 28.5;`：保存可有小數的資料。
- `Serial.print()` 先顯示文字；`Serial.println()` 再顯示資料並換行。

## 再試一次：只改資料，不改公式

~~~cpp
int usedSeats = 26;
float temperature = 25.0;
~~~

空位數會自動變成 `2`。你沒有修改計算式，程式仍能得出新結果。

::: tip 先記住這個選擇
人數、次數、腳位編號通常用 `int`；溫度、距離、電壓等可能有小數的資料，日後常用 `float`。
:::

## 易錯位

| ✕ 錯誤 | 原因 | 修正方法 |
| --- | --- | --- |
| `int temperature = 28.5;` | `int` 不能完整保存小數 | 改為 `float temperature = 28.5;` |
| 變數名稱前後大小寫不同 | `usedSeats` 和 `usedseats` 是兩個名字 | 全程使用同一個名稱 |
| 一行完整指令後少了 `;` | Arduino 看不出一行指令何時結束 | 每行完整指令最後加分號 |
| `Serial.println("emptySeats");` | 引號內是文字 | 寫成 `Serial.println(emptySeats);` |

## 你來做

- **基礎題**：建立 `studentCount`，顯示班內學生人數。
- **標準題**：建立總座位、已用座位和空位三個變數。
- **挑戰題**：加入 `float humidity = 65.5;`，顯示濕度。

## 本課小結

- 變數讓資料有名稱，方便日後修改和計算。
- `int` 保存整數；`float` 保存小數。
- `Serial.print()` 和 `Serial.println()` 可把文字與資料連在一起顯示。

## 離堂前 3 分鐘

1. `28.5` 較適合用 `int` 還是 `float`？
2. 若 `usedSeats` 由 23 改為 26，空位數是多少？
3. 為甚麼 `Serial.println("emptySeats");` 不會顯示計算結果？
