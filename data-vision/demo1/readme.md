# 大厂快速路  数据可视化

- 认识数据
    十万条数据要在页面上展示  怎么办？
    table il>li
    构建DOM树   css渲染树  显示页面  白屏  内存溢出
    分页Table + Pagination
    滚动到底部加载更多  better-scroll

- 确定任务
    增强数据的可读性  图表
- 方案 条形图
    x name
    y value
- 技术方案的选择
    - canvas 2D  画图方案 绘制API
    - SVG 矢量图
    - wegal 3D

- 数据整理
- 绘制api canvas
- canvas 是画出来的  像素
- SVG  数学图形声明出来的， 无限拉伸
    声明式

- 为什么Vue 不用DOM 编程？
    太耗性能  
    浏览器的原理相关
    页面渲染  html/css
    js执行  由另外的进程管理

- SVG Canvas 区别？
    数据简单，SVG 更加优秀 缺点是性能不好  频繁的操作DOM， SVG依托标签来完成功能
    canvas  绘图API更丰富  GPU负责  性能  大数据
    API 有点多， 底层很那啥？ echarts