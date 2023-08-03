# 1.盒子模型
1. 标准盒模型 
width + padding + border + margin === 总宽度
width === content
2. IE盒模型
width + margin === 总宽度
content + padding + border === width

box-sizing： border-box; // 让浏览器以IE盒模型的标准来执行
# 2.css选择器有哪些？ 优先级？ css中可以继承的属性有哪些
 1. id选择器
 2. 类名选择器
 3. 标签选择器
 4. 后代选择器
 5. 子选择器
 6. 相邻选择器
 7. 群组选择器
 8. 伪类选择器
 9. 伪元素选择器
 10. 属性选择器
 11. 层次选择器

 important > 行内 > id选择器 > 类名选择器 > 标签选择器
 font-xxx : 会继承   text-alian  text-indent  direction  visibility <!--font系列 text系列 表格布局-->>
# 3.说说em/px/rem/vh/vw的区别？
em,rem,vh,vw 都是相对单位，em相对于父容器的字体大小，rem相对于页面跟字体
大小，vw，vh相对于视窗的大小 px绝对单位，是以屏幕的物理发光点为准
# 4.说说设备像素， css像素，设备独立像素，dpr，ppi之间的区别？
1. css像素：1px === 1设备独立像素
2. 设备像素(物理像素) (pt)
3. 设备独立像素
4. device pixel ratio of 设备像素 / 设备独立像素
5. pixel per inch 像素的密度
# 5.css中有哪些可以隐藏页面元素的属性？ 他们之间有什么区别？
1. display: none
2. opacity: 0
3. visibility:hidden
4. position: absolute;top: -9999px;left: -9999px;
5. clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)
 - 是否还占据文档流的位置：
   是：opacity，visibility,clip-path
 - 是否能够触发点击事件
   是：opacity
 - 是否触发重排重绘：
   触发重排：display
   触发重绘：display，visibility, opacity
# 6.谈谈你对BFC的理解？
  - 是什么？
    BFC的目的是形成一个相对独立的空间， 让内部的子元素不会影响到外部的元素，
    BFC内得到相邻容器之间的margin不会重叠， BFC容器的高度计算会将浮动元素的高度也计算在内
  - 怎么触发？
    1. float: left,right
    2. overflow: 不为visible
    3. display： inline-xxx，table，grid，flex
    4. position：absolute，fixed
  - 应用场景？
    1. 防止margin重叠
    2. 清除浮动
# 7.水平垂直居中
  - 已知容器的宽高：margin，transform， position+负margin
  - 未知容器的宽高：flex, position+ transform,grid,table-cell+display
# 8.两栏布局，右侧自适应？三栏布局，中间自适应
  两栏：固定宽度 + float，flex布局
  三栏：
    左右浮动 + 中间margin (content最后加载)
    左右定位 + 中间margin
    flex(content没有最先加载)
    table布局(content没有最先加载)
    grid布局(content没有最先加载)
    float + 负margin
# 9.说说flexbox
  - 是什么
    我们称之为弹性布局，是一种可以简易，完整，响应式的实现各种页面布局的方式
    采用了flex布局的元素，子元素会自动去到同一行，容器中存在弹性主轴和交叉轴的概念，
    默认主轴是x方向，也能通过flex-direction修改主轴
  - 属性
    
  - 应用场景

