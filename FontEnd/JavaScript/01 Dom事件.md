# HTML Dom事件

<!-- TOC -->

- [HTML Dom事件](#html-dom事件)
    - [元素事件](#元素事件)
    - [鼠标/键盘事件](#鼠标键盘事件)
    - [鼠标/键盘属性](#鼠标键盘属性)
    - [标准 Event 属性](#标准-event-属性)
    - [标准 Event 方法](#标准-event-方法)

<!-- /TOC -->

## 元素事件

|   事件   |          何时发生？          
| -------- | -----------------------
| onchange | 域的内容被改变。             
| onload   | 一张页面或一幅图像完成加载。 
| onfocus  | 元素获得焦点。               
| onblur   | 元素失去焦点。               
| onabort  | 图像的加载被中断。           
| onerror  | 在加载文档或图像时发生错误。 
| onreset  | 重置按钮被点击。             
| onresize | 窗口或框架被重新调整大小。   
| onselect | 文本被选中。                 
| onsubmit | 确认按钮被点击。             
| onunload | 用户退出页面。               

## 鼠标/键盘事件

|    事件     |         何时发生？         
| ----------- | -------------------------- 
| onclick     | 单击事件                   
| onmousedown | 鼠标按钮被按下。           
| onmouseup   | 鼠标按键被松开。           
| ondblclick  | 双击事件                   
| onmouseout  | 鼠标从某元素移开。         
| onmouseover | 鼠标移到某元素之上。       
| onmousemove | 鼠标被移动。               
| onkeydown   | 某个键盘按键被按下。       
| onkeypress  | 某个键盘按键被按下并松开。 
| onkeyup     | 某个键盘按键被松开。       
	
## 鼠标/键盘属性

> - *事件中必须传入 event对象* `<div onmousedown="getCords(event)"></div>`
> - *这些属性会在事件触发时返回*

|     属性      |                     描述                     
| ------------- | --------------------------------------
| clientX       | 返回返回鼠标指针的水平坐标（相对于窗口）。     
| clientY       | 返回鼠标指针的垂直坐标（相对于窗口）。     
| screenX       | 返回鼠标指针的水平坐标（相对于屏幕）。 
| screenY       | 返回鼠标指针的垂直坐标（相对于屏幕）。 
| shiftKey      | 返回"SHIFT" 键是否被按下。   
| ctrlKey       | 返回"CTRL" 键是否被按下。    
| altKey        | 返回"ALT" 是否被按下。      
| metaKey       | 返回"meta" 键是否被按下。    
| button        | 返回返回哪个鼠标按钮被点击。     
| relatedTarget | 返回与事件的目标节点相关的节点。            
	
## 标准 Event 属性

|     属性      |                      描述                      
| ------------- | -------------------------------------
| bubbles       | 返回布尔值，指示事件是否是起泡事件类型。       
| cancelable    | 返回布尔值，指示事件是否可拥可取消的默认动作。 
| currentTarget | 返回其事件监听器触发该事件的元素。             
| eventPhase    | 返回事件传播的当前阶段。                       
| target        | 返回触发此事件的元素（事件的目标节点）。       
| timeStamp     | 返回事件生成的日期和时间。                     
| type          | 返回当前 Event 对象表示的事件的名称。          
	
## 标准 Event 方法

|        属性       |                      描述                      
| ------------------| -------------------------------------
| *initEvent()*       | 初始化新创建的 `Event` 对象的属性。
| *preventDefault()*  | 阻止元素的默认行为（预设行为），例如超链接的跳转。
| *stopPropagation()* | 阻止事件冒泡

> *JQuery中可以使用 `return false` 来阻止事件冒泡； `return false`包含：*
> 1. *event.preventDefault()*
> 2. *event.stopPropagation()*
> 3. *停止函数並返回*
	
	
	
	
	
	
	
	
	
	


