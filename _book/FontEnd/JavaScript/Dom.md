# DOM

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

```javascript
var note = document.getElementsByClassName("note");
note.innerHTML = "我的世界";
```

> `innerHTML` 也可以用来获取元素的内容

## 修改DOM的属性

```javascript
var a = document.getElementsByTagName("a");
a[0].href = "http://www.baodu.com";
```

> 采用的驼峰法则，将CSS样式根据驼峰法则来书写就变成了JS样式

