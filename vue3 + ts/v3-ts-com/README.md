# vue3 + typescript + composition api

- js 和 ts区别
   js语言？ 弱类型的脚本  代码的编译在运行的那一刹那
   .ts静态强类型  提前编译  语法检测和类型检测  专门的编译阶段
   .ts -> .js -> 运行
   ts 比 js 更适合大型项目？ js缺乏类型检测， 很多莫名奇妙的bug
   ts可以解决90% 这些问题， 编译阶段就发现

- 为什么要用ts？
   1. 大型项目多人协作， 接口， type等  可以约束代码如何被使用
      ts 起到了文档 代码建议， 不容易出错
   2. js 弱类型   容易出现类似 input 12 确实字符串

- props
   泛型约束 defineProps<{

   }>
   interface Props {
      bae?: number
   }
   defineProps<Props>
   interface 缺点是  不支持默认值， 宏函数withDefaults (defineProps,{})

- defineEmits
   运行时， const emit  =defineEmits(['change', 'update'])
   基于类型  对触发事件有更好的控制
- ref
   vue中Ref类型
   ：Ref<number>
   ref<number>()

- reactive
   - 把对象变成响应式
      应该有属性  interface
      const book: Book = reactive({title:})
- computed
   const double = computed<number>(() => {

   })
- template 事件
   - Event
   - ts 在编译
      event.target null 没有value
   - as HTMLInputElement Vue 所有html 标签都创建了类

- ref 标注dom 节点时
   - 由于 el.value 节点对象可能为null
   - 可能是任何dom 对象
      const el = ref<HTMLInputElement | null>(null)
      el.value?.focus()\
      ?. 兼容null

-  数据接口怎么做？
   - /api  表示接口地址
      http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=3
      api/columns?currentPage=1&pageSize=3  qs
      /api 是后端工程师   接口的路径的开始，约定  
       /columns 列表
   - 前后端分离
      前端 vue 3000
      后端 koa 8080 
      跨域 cors  JSONP 代理proxy
      A   C   B   后端接口已存在， 且在线上