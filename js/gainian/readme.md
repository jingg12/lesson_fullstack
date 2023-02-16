- 类数组
    有length属性 可以遍历  但是不具备数组的很多方法的对象子类型
    如 Agruments NodeList

    有length属性 可以遍历 的对象类型， 不是真正的数组
    不能调用数组的方法
    对象的子类型
    - 举例类数组
        arguments 函数的内置对象 this

    - es6 设计箭头函数的原因？
        1. this 增加了代码的复杂性，对其他的语言开发者不友好
        2. es6 语法的设计的指导原则一 简介优雅
    - 如何把类数组转成真正的数组
        可以使用数组的方法
       Nodelist div html  js runtime Node对象
       map html 字符串数组  .join('')
        - 遍历一下{} push []
        for (let i = 0; i < length; i++)
        - 切割 slice
        - Array.from
        - 展开运算符
        - concat + apply 
            concat 返回值也是数组

    - 如何理解reduce
        1. es6 map 外最高频数组api考点
        2. for of 或者说循环太机械  命令式编程
        3. map reduce filter every some 函数式编程
           useReducer() reduce 把数组推掉
           ((pre, cur) => {return pre +cur},0)
        4. 可读性更强

- JS 判断数组包含某个值
    蹦出api来是不友好的，专业，确切且全面
    - 使用indexOf 
      返回元素在数组中第一次出现的下标，从0开始 否侧-1
    - includes 
        数组中是否存在这个值，boolean
    - find    reduce map
        满足条件的第一个元素的值
    - finIndex  

