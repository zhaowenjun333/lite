# DOM操作

<!-- TOC -->

- [DOM操作](#dom操作)
    - [获取DOM元素](#获取dom元素)
    - [修改HTML输出流](#修改html输出流)
    - [修改DOM的内容](#修改dom的内容)
    - [修改DOM的属性](#修改dom的属性)
    - [修改DOM的样式](#修改dom的样式)
    - [创建/删除节点](#创建删除节点)
        - [创建节点](#创建节点)
        - [删除节点](#删除节点)

<!-- /TOC -->

|       方法                |             描述
|---------------------------|----------------------------------------
| getElementById()          |	返回带有指定 ID 的元素。
| getElementsByTagName()    |	返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。
| getElementsByClassName()  |	返回包含带有指定类名的所有元素的节点列表。
|                           |                               |
| createElement()           |	创建元素节点。
| createTextNode()          |	创建文本节点。
|                           |  
| insertBefore()            |	在指定的子节点前面插入新的子节点。
| appendChild()             |	把新的子节点添加到指定节点。
| removeChild()             |	删除子节点。
| replaceChild()            |	替换子节点。
|                           |  
| createAttribute()         |	创建属性节点。
| getAttribute()            |	返回指定的属性值。
| setAttribute()            |	把指定属性设置或修改为指定的值。

## 获取DOM元素

- 通过 **id** 找到DOM元素

    ```javascript
    var note = document.getElementById("note");
    ```

- 通过 **标签** 名找到DOM元素

    ```javascript
    var div = document.getElementsByTagName("div");
    ```

- 通过 **类名** 找到DOM元素

    ```javascript
    var wrapper = document.getElementsByClassName("wrapper");
    ```

> *通过标签或者类名查找，返回的是伪数组； 在改变dom的 **内容** **属性** **样式** 的时候，不能使用伪数组*

## 修改HTML输出流

```html
<script>
document.write(Date());
</script>
```

> *直接输出内容到页面，如果等待页面加载完后在使用，则会清除页面的内容*

## 修改DOM的内容

1. 获取元素（通过标签或者类名获取到的是伪数组，无法直接改变其内容）
2. 修改元素的内容

> 如果note中有子元素，子元素会被覆盖

```javascript
var note = document.getElementsByClassName("note");
note.innerHTML = "我的世界";
```

> `innerHTML` 也可以用来获取元素的内容

## 修改DOM的属性

1. 获取元素（通过标签或者类名获取到的是伪数组，无法直接改变其属性）
2. 修改元素的属性

```javascript
var a = document.getElementsByTagName("a");
a[0].href = "http://www.baodu.com";
```

## 修改DOM的样式

1. 获取元素（通过标签或者类名获取到的是伪数组，无法直接改变其样式）
2. 修改元素的样式

```javascript
var a = document.getElementsByTagName("a");
a[0].style.color = "red";
```

> JS属性名采用的驼峰法则，将CSS样式根据驼峰法则来书写就变成了JS样式

## 创建/删除节点

### 创建节点

**步骤：**

1. 获取父元素
2. 创建元素
3. 将创建的元素插入父元素中 

```javascript
// 获取父元素
var d1 = document.getElementById('d1')
// 创建元素
var p3 = document.createElement('p')
p3.innerHTML = "我是段落三"
// 将创建的元素插入父元素中
d1.appendChild(p3)
```

### 删除节点

**步骤：**

1. 获取父元素
2. 获取要删除的子元素
3. 删除子元素

```javascript
// 获取父元素
var d1 = document.getElementById('d1')
// 获取要删除的子元素
var p1 = document.getElementById('p1')
// 删除子元素
d1.removeChild(p1)
```