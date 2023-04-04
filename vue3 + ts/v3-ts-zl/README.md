# proxy 代理  解决跨域问题
   前后端分离
   服务器端已上线  本地通过proxy解决  跨域问题
   mockjs + online  fastmock 按约定的接口文档来模拟
   分头开发前 在一起约定一个接口文档   哪些接口/api
   restful url parms qs json 返回是什么
   等前端后端都独立写完的时候， 联调 
   本地的axios baseUrl -> serverUrl
   
   vite.config.js , 可以帮我们的前端请求做代理
   nginx 高性能服务器， 负载均衡服务器  服务器集群的ip地址和忙
   闲算法 代理服务器    :3000 proxy :80 http默认端口
   http://localhost  -> http://localhost:80  -> nginx
   http://localhost:3000

   /api/column  -> http://localhost:3000  -> proxy 一下
   http://api.vikingship.xyz/api target + /api/column
   ->http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=3