# 第 2 課：用變數保存和計算資料

## 今課可以做到甚麼？

- 用 `int` 建立整數變數保存資料。
- 把變數內容顯示在 Serial Monitor。
- 讓 Arduino 根據變數完成一個簡單計算。

## 開始前：想一想

如果課室今天有 28 個座位、已經坐了 23 人，程式怎樣知道還有多少個空位？

你可以直接在很多地方寫數字，但日後人數改變時，很容易漏改。較好的做法是先替每個資料取一個清楚的名字。

## 把資料交給程式記住

![變數、計算與文字輸出](/images/variables-and-output.svg)

`int` 用來保存整數。變數就像貼上名稱的資料格：例如 `totalSeats` 保存總座位數，`usedSeats` 保存已使用座位數。程式可以之後再讀取、計算和顯示它們。

## 跟著做：顯示課室座位資料

```cpp
int totalSeats = 28;
int usedSeats = 23;
int emptySeats = totalSeats - usedSeats;

void setup() {
  Serial.begin(9600);

  Serial.print("空位數：");
  Serial.println(emptySeats);
}

void loop() {
}
```

**預期輸出：**

```text
空位數：5
```

逐行看：

- `int totalSeats = 28;`：建立名為 `totalSeats` 的整數變數，先存入 28。
- `int usedSeats = 23;`：建立第二個變數，存入 23。
- `int emptySeats = totalSeats - usedSeats;`：用前兩個變數計算空位數。
- `Serial.print(...)`：顯示文字，但先不換行。
- `Serial.println(emptySeats);`：接著顯示變數的數值，然後換行。

## 再試一次：只改資料，不改公式

把這一行：

```cpp
int usedSeats = 23;
```

改成：

```cpp
int usedSeats = 26;
```

**預期輸出：** `空位數：2`

公式沒有改，程式會按新的資料重新算出結果。這正是變數的用途：資料改變時，不用把每個答案手動重寫。

## 易錯位

| ✕ 錯誤 | 原因 | 修正方法 |
| --- | --- | --- |
| `total seats` 中間有空格 | 變數名稱不能有空格 | 用 `totalSeats` 或 `total_seats` |
| 寫成 `Int` | Arduino/C++ 區分大小寫 | 用小寫 `int` |
| 把 `emptySeats` 寫成 `emptySeat` | 名稱不一致，程式找不到資料 | 同一個變數要完全同名 |
| 寫成 `Serial.println("emptySeats");` | 雙引號內會被當成文字 | 要顯示數值時寫 `Serial.println(emptySeats);` |

## 你來做

- **基礎題**：建立 `temperature` 變數並顯示「目前溫度：」和數值。
- **標準題**：建立 `price` 和 `quantity`，計算並顯示總價。
- **挑戰題**：把課室座位例子改成圖書館座位例子，要求只改變數值和文字，不改計算公式。

## 本課小結

- `int` 可保存整數資料。
- 變數名稱要清楚、不能有空格，而且區分大小寫。
- 先保存資料，再用公式計算，比重複手寫答案更容易修改。

## 離堂前 3 分鐘

1. `int score = 80;` 中，變數名稱是哪一部分？
2. 怎樣顯示變數 `score` 的數值，而不是文字 `score`？
3. 若 `total = 10`、`used = 6`，`total - used` 是多少？
