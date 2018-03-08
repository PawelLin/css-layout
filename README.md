# flex布局

## 目录
* 布局原理及组成
* flex容器属性
* flex项目属性
* flex实例
* grid布局扩展

### 一、布局原理及组成

flex布局基于主轴线及交叉轴进行排列布局，有父容器container及子项目组成。
``
.container {
    display: flex;
}
``

### 二、flex容器属性
* flex-direction    (确定主轴线方向)
* flex-wrap         (是否换行)
* flex-flow         (flex-direction flex-wrap)
* justify-content   (子项目在主轴线上的对齐方式)
* align-items       (子项目在交叉轴上的对齐方式)
* align-content     (多根轴线的对齐方式)

### 三、flex项目属性
* order
* flex-grow
* flex-shrink
* flex-basis
* flex
* align-self

### 四、flex实例

### 五、grid布局扩展
flex布局解决了在一维空间中的行和列中内容如何适应


