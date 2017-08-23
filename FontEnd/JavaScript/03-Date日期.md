## 日期的方法

- 获取时间
  - Date()	返回当日的日期和时间。
  - getTime()	返回 1970 年 1 月 1 日至今的毫秒数。
  - parse()	返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
  - getTimezoneOffset()	返回本地时间与格林威治标准时间 (GMT) 的分钟差。
- 获取本地时间的年、月、日、小时等
  - getFullYear()	从 Date 对象以四位数字返回年份。
  - getMonth()	从 Date 对象返回月份 (0 ~ 11)。
  - getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
  - getHours()	返回 Date 对象的小时 (0 ~ 23)。
  - getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
  - getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
  - getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
  - getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
- 获取世界时间(UTC)的年、月、日、小时等
  - getUTCFullYear()	根据世界时从 Date 对象返回四位数的年份。
  - getUTCMonth()	根据世界时从 Date 对象返回月份 (0 ~ 11)。
  - getUTCDate()	根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
  - getUTCHours()	根据世界时返回 Date 对象的小时 (0 ~ 23)。
  - getUTCMinutes()	根据世界时返回 Date 对象的分钟 (0 ~ 59)。
  - getUTCSeconds()	根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
  - getUTCMilliseconds()	根据世界时返回 Date 对象的毫秒(0 ~ 999)。
  - getUTCDay()	根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
- 设置时间
  - setTime()	以毫秒设置 Date 对象。
- 设置本地时间的年、月、日、小时等
  - setFullYear()	设置 Date 对象中的年份（四位数字）。
    ```js
    dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
    ```
  - setMonth()	设置 Date 对象中月份 (0 ~ 11)。
  - setDate()	设置 Date 对象中月的某一天 (1 ~ 31)。
  - setHours()	设置 Date 对象中的小时 (0 ~ 23)。
  - setMinutes()	设置 Date 对象中的分钟 (0 ~ 59)。
  - setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
  - setMilliseconds()	设置 Date 对象中的毫秒 (0 ~ 999)。
- 获取世界时间(UTC)的年、月、日、小时等。
  - setUTCFullYear()	根据世界时设置 Date 对象中的年份（四位数字）。
  - setUTCMonth()	根据世界时设置 Date 对象中的月份 (0 ~ 11)。
  - setUTCDate()	根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
  - setUTCHours()	根据世界时设置 Date 对象中的小时 (0 ~ 23)。
  - setUTCMinutes()	根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
  - setUTCSeconds()	根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。
  - setUTCMilliseconds()	根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
- 其他方法
  - toString()	把 Date 对象转换为字符串。
  - toTimeString()	把 Date 对象的时间部分转换为字符串。
  - toDateString()	把 Date 对象的日期部分转换为字符串。
  - toUTCString()	根据世界时，把 Date 对象转换为字符串。
  - toLocaleString()	根据本地时间格式，把 Date 对象转换为字符串。
  - toLocaleTimeString()	根据本地时间格式，把 Date 对象的时间部分转换为字符串。
  - toLocaleDateString()	根据本地时间格式，把 Date 对象的日期部分转换为字符串。
  - UTC()	根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
    ```js
    Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
    ```
  - valueOf()	返回 Date 对象的原始值。