const Koa = require('koa'); // node 里的框架 commonjs 模块
const router = require('koa-router')();
const app = new Koa(); //  服务器端应用
const path = require('path');// node内置模块
const views = require('koa-views')
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken')
//挂载模板引擎
app.use(views(
    // 模板位置和引擎
    path.join(__dirname, './views'),{
        extension: 'ejs'// 模板引擎的种类
    }
))
app.use(bodyParser())
// 后端的登录界面 传统的web 网站开发 
router.get('/login', async (ctx) => {
    // ctx 本次服务的上下文环境对象 = request + response 
    // 伺服状态， 怎么响应用户请求 
    // response
    const title = 'hello koa2'
    // 页面的渲染 传统 MVC View Controller
    await ctx.render('index', {
        title
    })

    // 前后端分离
    // ctx.body = {
    //     msg:'hello, login'
    // }
})
router.get('/user',async(ctx) => {
    await ctx.render('user')
})
router.get('/profile',async(ctx) => {
    console.log(ctx.request.headers);
    const auth = ctx.request.headers['authorization'];
    console.log(auth)// token
    const payload = jwt.verify(auth, 'secret')
    ctx.body = {
        id: payload
    }
})
router.post('/login',async(ctx) => {
    console.log();
    const { name, pwd } = ctx.request.body
    console.log(name, pwd, '///');
    // 解析请求体  ctx.request.headers
    // 颁发token  签发
    if(name === 'admin' && pwd ==='123456'){
        // 数据库查出来的userId = 1
        // json 数据 cookie 的数据丰富
        // 钥匙， 只在服务器端生成和校验，
        // cookie 前后端都可以 且是明文的  可以被第三方截获
        // token 更安全 只有在后端才可以解析
        const token = jwt.sign({
            id: 1
        },'secret',{
            expiresIn: 6000
        })
    ctx.body = {
        statusCode: 200,
        token
        }
    }else {
        ctx.body = {
            statusCode: 200,
            token: '用户名错误'
            }
    }   
})
app
    .use(router.routes()) // vue 路由数组
    .use(router.allowedMethods()) // get post delete put patch ... 

app.listen(8080, () => {
    console.log('server is running 8080')
})

