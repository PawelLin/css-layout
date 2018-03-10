# flex布局介绍
传统的布局，父层无法很好地控制子层行列的适应，子层需依据文档流，或者通过破坏文档流的形式进行排列。<br>
2009年，W3C提出了一种新的方案—-flex布局，可以很好的控制子层在父层中的行列适应，在一维空间为所欲为，能极大的控制子层的排列及对齐。目前各大浏览器都已经支持，部分旧版本可引入postcss用旧flex布局进行兼容。[css-hack在线转换](http://cssnext.io/playground/)<br>
## 浏览器支持
* new: 使用新版本的flex布局 (display: flex)
* tweener：使用过渡版本的flexbox布局 (display: flexbox)
* old：使用旧版本的box布局 (display: box)<br>
![flex-hack](https://pawellin.github.io/css-layout/img/flex-hack.png)<br>

*参考文章链接：*[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)、[ A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
## 目录
* **布局原理及组成**
* **flex容器属性**
* **flex项目属性**
* **flex实例**
* **grid布局扩展**

### 一、布局原理及组成

flex布局基于主轴线及交叉轴进行排列布局，交叉轴跟随主轴线方向改变，始终与主轴线相互垂直。由父容器container及子项目item组成。<br>
![summary](https://pawellin.github.io/css-layout/img/summary.svg)<br>
``
.container {
    display: flex;
}
``
设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。<br>

*注：以下flex属性示例图，子项目宽高默认为 100px × 100px*

### 二、flex容器属性
* **flex-direction**
* **flex-wrap**
* **flex-flow**
* **justify-content**
* **align-items**
* **align-content**

**2. 1 flex-direction( 确定主轴线方向 )**<br>
``
.box { flex-direction: row | row-reverse | column | column-reverse }
``<br>*依次为水平左右方向，垂直上下方向*<br>
![row-reverse](https://pawellin.github.io/css-layout/img/row.png)
![row-reverse](https://pawellin.github.io/css-layout/img/row-reverse.png)
![row-reverse](https://pawellin.github.io/css-layout/img/column.png)
![column-reverse](https://pawellin.github.io/css-layout/img/column-reverse.png)<br>

**2. 2 flex-wrap ( 超出是否换行 )**<br>
``
.box { flex-wrap: nowrap | wrap | wrap-reverse }
``<br>*超过一行时，换行才有效*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/nowrap.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/wrap.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/wrap-reverse.png)<br>

**2. 3 flex-flow ( flex-direction + flex-wrap )**<br>
``
.box { flex-flow: <flex-direction> <flex-wrap> }
``<br>*同时设置主轴线方向和超出是否换行*<br>

**2. 4 justify-content   ( 子项目在主轴线上的对齐方式 )**<br>
``
.box { justify-content: flex-start | flex-end | center | space-between | space-around }
``<br>*依次为主轴线起点对齐、终点对齐、居中对齐、两端对齐、两端间隔相等对齐*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-start.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-end.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/center.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/space-between.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/space-around.png)<br>
*扩展： 在父容器头尾添加空子节点，设置为两端对齐可实现所有子项目左右间隔相等*
![flex-shrink](https://pawellin.github.io/css-layout/img/space-between1.png)<br>

**2. 5 align-items   ( 子项目在交叉轴上的对齐方式 )**<br>
``
.box { align-items: stretch | flex-start | flex-end | center | baseline }
``<br>*依次为占满父容器高度、交叉轴起点对齐、终点对齐、中心对齐、子项目第一行文字基线对齐*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/1stretch.png)
![flex-shrink](https://pawellin.github.io/css-layout/img/1flex-start.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/1flex-end.png)
![flex-shrink](https://pawellin.github.io/css-layout/img/1center.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/1baseline.png)<br>

**2. 6 align-content ( 多根轴线的对齐方式 )**<br>
``
.box { align-content: stretch | flex-start | flex-end | center | space-between | space-around }
``
![flex-shrink](https://pawellin.github.io/css-layout/img/stretch.png)
![flex-shrink](https://pawellin.github.io/css-layout/img/sflex-start.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/sflex-end.png)
![flex-shrink](https://pawellin.github.io/css-layout/img/scenter.png)<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/sspace-between.png)
![flex-shrink](https://pawellin.github.io/css-layout/img/sspace-around.png)<br>

### 三、flex项目属性
* **order**
* **flex-grow**
* **flex-shrink**
* **flex-basis**
* **flex**
* **align-self**

**3. 1 order(排列顺序)**<br>
`
.item { order: <Integer || 0> }
`<br>*数值越小，排列越靠近主线轴的起点*<br>
![order](https://pawellin.github.io/css-layout/img/order.png)<br>

**3. 2 flex-grow(放大比例)**<br>
`
.item { flex-grow: <number || 0> }
`<br>*剩余空间按所有各项目的放大比例分配*<br>
![flex-grow](https://pawellin.github.io/css-layout/img/flex-grow.png)<br>

**3. 3 flex-shrink(缩小比例)**<br>
`
.item { flex-shrink: <number || 1> }
`<br>*缺少空间按所有各项目的缩放比例分配*<br>
![flex-shrink](https://pawellin.github.io/css-layout/img/flex-shrink.png)<br>

**3. 4 flex-basis(分配多余空间前占主轴线的空间)**<br>
`
.item { flex-basis: <length || auto> }
`<br>*可设置值与width类似，优先级 width < flex-basis < max-width*<br>
缩放比例为1且超出父容器的空间，缩放计算公式为：(分配前占的空间/子项目的总空间)*需缩放空间<br>
下图的计算结果为：(200 / 1000) * 200 = 40；(100 / 1000) * 200 = 20;
![flex-basis](https://pawellin.github.io/css-layout/img/flex-basis1.png)<br>
![flex-basis](https://pawellin.github.io/css-layout/img/flex-basis2.png)<br>

**3. 5 flex ( flex-grow + flex-shrink + flex-basis )**<br>
`
.item { flex: (<flex-grow> <flex-shrink> <flex-basis>) || auto }
`
<br>*两个快捷值：auto(1,1,auto)、none(0,0,auto)，优先使用flex，浏览器会自动推算其他值*<br>

**3. 6 align-self (自身对齐方式)**<br>
`
.item { align-self: auto | flex-start | flex-end | center | baseline | stretch }
`<br>*默认auto值继承父容器align-items的值，设置为其他值可覆盖继承值(父容器设置会超出换行时，覆盖无效)*<br>
![align-self](https://pawellin.github.io/css-layout/img/align-self.png)<br>

### 四、flex实例
* 管理系统简易布局
* 水平垂直居中弹层
* 三栏布局自适应布局
* tab层菜单自适应布局

### 五、grid布局扩展
flex布局解决了在一维空间中的行和列中内容如何适应，但在二维空间上还是比较乏力，如一行排列的项目，其中一个项目的高度超出同等的项目，该高度将会占据整一行，导致下一行的项目无法紧凑排列。如下图：<br>
![flex-out](https://pawellin.github.io/css-layout/img/flex-out.png)<br>
而grid布局在行列的自由布局非常强大，虽然浏览器的兼容性还不大好。
#### 兼容
![grid-hack](https://pawellin.github.io/css-layout/img/grid-hack.png)<br>
#### 示例
![grid](https://pawellin.github.io/css-layout/img/grid-end.png)<br>



