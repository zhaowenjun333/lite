# DOM操作

<!-- TOC -->

- [DOM操作](#dom操作)
  - [DOM 获取（访问）](#dom-获取访问)
  - [DOM 修改](#dom-修改)
    - [修改DOM的内容](#修改dom的内容)
    - [修改DOM的属性](#修改dom的属性)
    - [修改DOM的样式](#修改dom的样式)
  - [创建/删除/替换节点](#创建删除替换节点)
    - [创建节点](#创建节点)
    - [插入节点](#插入节点)
    - [替换节点](#替换节点)
    - [删除节点](#删除节点)
  - [DOM 属性](#dom-属性)
  - [修改输出流](#修改输出流)

<!-- /TOC -->
    


## DOM 获取（访问）

|           方法           |                              描述                               
| ------------------------ | ---------------------------------------
| getElementById()         | 返回带有指定 ID 的元素。                                        
| getElementsByTagName()   | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 
| getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。                      

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

## DOM 修改

### 修改DOM的内容

1. 获取元素（通过标签或者类名获取到的是伪数组，无法直接改变其内容）
2. 修改元素的内容

> 如果note中有子元素，子元素会被覆盖

```javascript
var note = document.getElementsByClassName("note");
note.innerHTML = "我的世界";
```

> `innerHTML` 也可以用来获取元素的内容

### 修改DOM的属性

1. 获取元素（通过标签或者类名获取到的是伪数组，无法直接改变其属性）
2. 修改元素的属性

```javascript
var a = document.getElementsByTagName("a");
a[0].href = "http://www.baodu.com";
```

### 修改DOM的样式

1. 获取元素（通过标签或者类名获取到的是伪数组，无法直接改变其样式）
2. 修改元素的样式

```javascript
var a = document.getElementsByTagName("a");
a[0].style.color = "red";
```

> JS属性名采用的驼峰法则，将CSS样式根据驼峰法则来书写就变成了JS样式

## 创建/删除/替换节点

|           方法           |             描述                               
| ------------------------ | ---------------------------
| createElement()          | 创建元素节点。                                                  
| createTextNode()         | 创建文本节点。                                                  
| createAttribute()        | 创建属性节点。                                                  
| appendChild()            | 把新的子节点添加到指定节点。                                    
| insertBefore()           | 在指定的子节点前面插入新的子节点。                             
| removeChild()            | 删除子节点。                                                    
| replaceChild()           | 替换子节点。
| getAttribute()           | 返回指定的属性值。                                              
| setAttribute()           | 把指定属性设置或修改为指定的值。       

### 创建节点

```js
node.appendChild(newNode);
```

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

### 插入节点

```javascript
parentNode.insertBefore(newNode, referenceNode);
```

**步骤：**

1. 获取父元素
2. 获取相邻子元素
3. 创建元素
4. 将创建的元素插入相邻子元素的前面 

```javascript
// 获取父元素
var d1 = document.getElementById('d1')
// 获取子元素
var p2 = document.getElementById('p2')
// 创建元素
var p = document.createElement('p')
p.innerHTML = "我是段落三"
// 将创建的元素插入父元素中
d1.insertBefore(p, p2)
```

### 替换节点

```js
parentNode.replaceChild(newChild, oldChild);
```

**步骤：**

1. 获取父元素
2. 获取旧子元素
3. 创建元素
4. 将新建元素和旧子元素进行替换 

```javascript
// 获取父元素
var d1 = document.getElementById('d1')
// 获取子元素
var p2 = document.getElementById('p2')
// 创建元素
var p = document.createElement('p')
p.innerHTML = "我是段落三"
// 将创建的元素插入父元素中
d1.replaceChild(p, p2)
```

### 删除节点

```js
node.removeChild(child);
```

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

## DOM 属性

|      属性       |             描述                               
| --------------- | ---------------------------
| [innerHTML]()   | 获取或替换DOM元素的内容                                               
| [nodeName]()    | 获取节点的名称。                                                  
| [nodeValue](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeValue)| 获取节点的值。                                                  
| [nodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)| 获取节点的类型。 
| parentNode | 返回父元素节点
| firstChild | 返回第一个子元素
| lastChild  | 返回最后一个子元素                                 
| childNodes   | 返回元素的所有节点                                 
| document.documentElement  | 全部文档                              
| document.body  | 文档的主体                                 

## 修改输出流

```html
<script>
document.write(Date());
</script>
```
> *直接输出内容到页面，如果等待页面加载完后在使用，则会清除页面的内容*

![2017-09-06-13-24-12.md](//opd59bmxu.bkt.clouddn.com/2017-09-06-13-24-12.md)