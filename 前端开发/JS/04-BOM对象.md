# BOM对象

<!-- TOC depthFrom:1 depthTo:2 -->

- [BOM对象](#bom对象)
  - [window](#window)
  - [History](#history)
  - [Location](#location)

<!-- /TOC -->

## window

## History

### History属性

|   属性	 | 描述
|----------|---------------------
| length   | 返回浏览器历史列表中的 URL 数量。

### History方法

| 方法      |	描述
|-----------|------------------------------
| back()	  | 加载 history 列表中的前一个 URL。
| forward() | 加载 history 列表中的下一个 URL。
| go(num \| URI)| 加载 history 列表中的某个具体页面。

## Location

### Location 对象属性

|   属性	 | 描述
|----------|---------------------
| href     | 设置或返回完整的 URL。
| protocol | 设置或返回当前 URL 的协议。
| host     | 设置或返回主机名和当前 URL 的端口号。
| hostname | 设置或返回当前 URL 的主机名。
| port     | 设置或返回当前 URL 的端口号。
| pathname | 设置或返回当前 URL 的路径部分。
| hash     | 设置或返回从井号 (#) 开始的 URL（锚）。
| search   | 设置或返回从问号 (?) 开始的 URL（查询部分）。

### Location 对象方法

|   属性	  |   描述
|-----------|----------
| assign()	| 加载新的文档。
| reload()	| 重新加载当前文档。
| replace()	| 用新的文档替换当前文档。

