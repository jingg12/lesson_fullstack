-  任务流 Promise 序列
    [upload(),upload(),upload()]
    - 随机定时器值  任务的时间和索引没有关系
    - 一半成功，一半失败
    - setTimeout 第三个参数会在定时器到达时触发
    - promise then 最后 catch rejected 时候触发
    - async await 
        rejected
        try {

        }catch(err) {

        }
    - 是否运行了

    - Promise.all
        全部执行通过才认为是成功，否则认为是失败
        有失败的并不会停下来
        结果 
        - 并发
    - Promise.race
        - 第一个完成的result
        - 所有的都会执行
        - 并行
    - any
        - 只要有一个成功就行
