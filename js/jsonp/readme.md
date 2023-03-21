# json with padding

- 跨域
    1. 以后  服务器脚本
        api.baidu.com/say  后端接口域名
        www.baidu.com 前端域名
        ？ 跨域了
    url  http(s):domain.com:8888/path?a=1#b
    只要协议域名端口不一样  都叫跨域  严格
    不只是跨domain 域名  cross origin = domain + 端口 +协议
    安全
        双方
        前端  不信任后端返回的资源
        后端  NO Access s
    跨域确是常态
        前后端分离是主流  8888 3000
        大公司的协作
            api.baidu.com
            ai.baidu.com

            taobao.com
            cainiao.com

- 浏览器会自动经行CORS通信
    实现CORS通信的关键是后端
    只要后端实现了CORS 就实现了跨域
    服务器设置Access-Control-Allow-Origin * 后端
    白名单
- 跨域
- 什么是同源策略及其限制内容
    同源策略是一种约定 是浏览器最核心也是最基本的安全功能
    如果没有，浏览器很容易收到XSS，CSRF攻击
    js里不能执行 非同源代码

    - cookie localStorage Origin  沙箱隔离
    - DOM节点
    - AJAX 请求 js内容  CORS 