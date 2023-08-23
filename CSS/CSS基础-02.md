# CSS

## CSS 是什么？
层叠样式表

对于页面上的文字、图案、多媒体，整体的布局、表现、样式问题，都是CSS来解决


## BFC 是什么？

盒模型
把文档看成一个个盒子
所谓BFC，就是block formatting context
块级格式化上下文
它会创建一个特殊的区域，在这个区域中，只有block box参与布局

### BFC 的成因
- 根元素或者其他包含它的元素
- 浮动元素
- 绝对定位元素
- 内联块
- 表格单元格
- 表格标题
- * 具有overflow, 且不是visible的元素
- display: inline-block/table-cell/table-caption/flex/inline-flex/grid/inline-grid

### BFC 的特点/规则
- 内部的 box将会独占宽度，且在垂直方向，轮流排列
- box 垂直方向的间距由 margin决定 ，但是同一个BFC 的两个相邻box的margin，会出现**边距折叠**现象
- 每个box水平方向上左边缘，与BFC的左边缘对齐，即使存在浮动，也是如此
- BFC **区域不会与浮动元素重叠**， 而是依次排列
- BFC 区域内是一个独立的渲染容器，容器内的元素和BFC区域外的元素不会形成干扰
- 浮动元素的高度也参与到BFC 高度计算中

## CSS 的重点

### 背景、阴影、滤镜
background 非常常用的一个属性
- X-color
- X-image
- X-repeat 图像的平铺方式
- X-attachment scroll / fixed
- X-position
- X-size
- X-origin
- X-clip
- X-blend-mode

background 的连续规则：
background: color image repeat attachment position/size

#### 阴影

##### box-shadow
offsetX 水平偏移
offsetY 垂直偏移
blur    模糊半径
spread  扩展距离
color   投影颜色
position投影位置

#### text-shadow drop-shadow

offsetX 水平偏移
offsetY 垂直偏移
blur    模糊半径
color   投影颜色


#### 滤镜
filter 一共有十个函数
- blur 模糊
- brightness两端
- contrast 对比度
- drop-shadow阴影
- grayscale 灰度
- hue-rotate 色相旋转
- invert 反相
- opaticy 透明度
- saturate饱和度
- sepia 褐色


### 定位
- fixed 相对于浏览器窗口定位
- absolute 相对于第一个父级不为static的元素定位
- relative 不改变文档流，直接基于原有位置定位
- sticky CSS3, fixed 和 relative 切换
- static -- normal
