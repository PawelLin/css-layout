# flex布局

## 目录
* **布局原理及组成**
* **flex容器属性**
* **flex项目属性**
* **flex实例**
* **grid布局扩展**

### 一、布局原理及组成

flex布局基于主轴线及交叉轴进行排列布局，交叉轴跟随主轴线方向改变，始终与主轴线相互垂直。有父容器container及子项目组成。<br>
![Froad](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)<br>
``
.container {
    display: flex;
}
``
设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

### 二、flex容器属性
* **flex-direction( 确定主轴线方向 )**<br>
``
.box { flex-direction: row | row-reverse | column | column-reverse }
``<br>*依次为水平左右方向，垂直上下方向*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-grow.png)<br>

* **flex-wrap ( 超出是否换行 )**<br>
``
.box { flex-wrap: nowrap | wrap | wrap-reverse }
``<br>*超过一行时，换行才有效*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-grow.png)<br>

* **flex-flow ( flex-direction + flex-wrap )**<br>
``
.box { flex-flow: <flex-direction> <flex-wrap> }
``

* **justify-content   ( 子项目在主轴线上的对齐方式 )**<br>
``
.box { justify-content: flex-start | flex-end | center | space-between | space-around }
``<br>*依次为主轴线起点对齐、终点对齐、居中对齐、两端对齐、两端间隔相等对齐*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-grow.png)<br>

* **align-items   ( 子项目在交叉轴上的对齐方式 )**<br>
``
.box { align-items: stretch | flex-start | flex-end | center | baseline }
``<br>*依次为占满父容器高度、交叉轴起点对齐、终点对齐、中心对齐、子项目第一行文字基线对齐*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-grow.png)<br>

* **align-content ( 多根轴线的对齐方式 )**<br>
``
.box { align-content: flex-start | flex-end | center | space-between | space-around }
``
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-grow.png)<br>

### 三、flex项目属性
* **order(排列顺序)**<br>
`
.item { order: <Integer || 0> }
`<br>*数值越小，排列越靠近主线轴的起点*<br>
![order](https://pawellin.github.io/css-layout/img/order.png)<br>

* **flex-grow(放大比例)**<br>
`
.item { flex-grow: <number || 0> }
`<br>*剩余空间按所有各项目的放大比例分配*<br>
![flex-grow](https://pawellin.github.io/css-layout/img/flex-grow.png)<br>

* **flex-shrink(缩小比例)**<br>
`
.item { flex-shrink: <number || 1> }
`<br>*缺少空间按所有各项目的缩放比例分配*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-shrink.png)<br>

* **flex-basis(分配多余空间前占主轴线的空间)**<br>
`
.item { flex-basis: <length || auto> }
`<br>
![flex-basis](https://pawellin.github.io/css-layout/img/flex-basis1.png)<br>
![flex-basis](https://pawellin.github.io/css-layout/img/flex-basis2.png)<br>

* **flex ( flex-grow + flex-shrink + flex-basis )**<br>
`
.item { flex: (<flex-grow> <flex-shrink> <flex-basis>) || auto }
`
* **align-self (自身对齐方式)**<br>
`
.item { align-self: auto | flex-start | flex-end | center | baseline | stretch }
`<br>*默认auto值继承父容器align-items的值，设置为其他值可覆盖继承值*<br>
![align-self](https://pawellin.github.io/css-layout/img/align-self.png)<br>

### 四、flex实例
* 管理系统简易布局
* 水平垂直居中弹层
* 三栏布局自适应布局
* tab层菜单自适应布局

### 五、grid布局扩展
flex布局解决了在一维空间中的行和列中内容如何适应


