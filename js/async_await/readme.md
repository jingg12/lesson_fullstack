#  JS 执行机制
-  JS 为何而生？
     响应用户的交互， 事件， 简单
     有必要设计成为多线程吗？  JAVA C++
     线程是程序运行的最小单元，
     JS 设计为单线程 优点是简单 缺点脆弱？
     同步代码尽快运行完，耗时的任务怎么办？

-   JS = 单线程 + Event Loop（机制）
       setTimeout fetch  eventListener 异步的，放入Event Loop里

       同步代码快速运行，  js进入到idle 状态 3s 在进入单线程运行
       