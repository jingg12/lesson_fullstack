# 大型应用
- three
- echarts
- 大屏
  >1940
  rem  做单位
- vue3组件

- 工程化
   alias @ vite.config.js
   tsconfig.json 静态编译

- 组件化
   大屏组件化比较简单
   Header
   Panel
      PieCharts
      LineCharts
   three
      Scene

- 闭包前面的；
   ；阻断之前的执行
   立即执行函数
   框架 jquery loadsh 代码放到立即执行函数里面
   最前面；
   代码混淆  合并的

- echarts 提升？
   useChart 函数
   - 封装echarts 的使用流程
     init
     setOptions
     resize
     卸载的  释放内存 onUnmounted

- vue3 hooks 封装echarts的用法
 - 简历了解echarts/three.js数据可视化方案
 - 在项目中加一个echarts 图
 - 项目亮点介绍
    使用hooks封装echarts 各种图表，不用重复echarts的api， 并做到响应式
    - useCharts
      - 封装了 echarts的init， dom挂载点的获取，
      - nextTick() setOptions 方法
      - onUnmounted dispose 方法， null手动回收图表实例  性能优化
      - useResize
       - throttle onresize 性能优化
       - onMounted addEventListener('resize')
       - onUnmounted removeEventListener('resize')
   - useChart() 返回setOption + ref