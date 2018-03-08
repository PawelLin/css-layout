# flex布局

## 目录
* 布局原理及组成
* flex容器属性
* flex项目属性
* flex实例
* grid布局扩展

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
* flex-direction( 确定主轴线方向 )<br>
``
.box { flex-direction: row | row-reverse | column | column-reverse }
``
* flex-wrap ( 超出是否换行 )<br>
``
.box { flex-wrap: nowrap | wrap | wrap-reverse }
``
* flex-flow ( flex-direction + flex-wrap )<br>
``
.box { flex-flow: <flex-direction> <flex-wrap> }
``
* justify-content   ( 子项目在主轴线上的对齐方式 )<br>
``
.box { justify-content: flex-start | flex-end | center | space-between | space-around }
``
* align-items   ( 子项目在交叉轴上的对齐方式 )<br>
``
.box { align-items: stretch | flex-start | flex-end | center | baseline }
``
* align-content ( 多根轴线的对齐方式 )<br>
``
.box { align-content: flex-start | flex-end | center | space-between | space-around }
``

### 三、flex项目属性
* order(排列顺序)<br>
`
.item { order: <Integer || 0> }
`
* flex-grow(放大比例)<br>
`
.item { flex-grow: <number || 0> }
`
* flex-shrink(缩小比例)<br>
`
.item { flex-shrink: <number || 1> }
`
* flex-basis()<br>
`
.item { flex-basis: <length || auto> }
`
* flex ( flex-grow + flex-shrink + flex-basis )<br>
`
.item { flex: (<flex-grow> <flex-shrink> <flex-basis>) || auto }
`
* align-self (自身对齐方式)<br>
`
.item { align-self: auto | flex-start | flex-end | center | baseline | stretch; }
`

### 四、flex实例

### 五、grid布局扩展
flex布局解决了在一维空间中的行和列中内容如何适应


