#  函数篇
-  函数记忆功能
    1. 函数的参数或函数的返回值也是函数的话，我们称之为高阶函数
        memorize 高阶函数
    2. 闭包
    3. 巧妙地利用缓存，提升性能地关键
-   闭包是如何形成地
    1. 函数嵌套函数，运行且返回函数
-   记忆函数
    1. 用空间换时间 cache{}
    2. 使用key 
       arguments.length + Array.prototype.join.apply(this,arguments)
       不能处理参数是对象这种情况
       原因是【object object】join本质，会先toString
    3. memorize 函数需要优化，