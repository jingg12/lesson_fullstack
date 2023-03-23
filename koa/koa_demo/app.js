const Koa = require('koa')
const config = require('./config/default.js')
const path = require('path')
const app = new Koa()
const views = require('koa-views')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')
// mvc
const signupRouter = require('./routers/signup.js')
const signinRouter = require('./routers/signin.js')
const signoutRouter = require('./routers/signout.js')
const postsRouter = require('./routers/posts.js')
const session = require('koa-session')
// const MySqlStore = require('koa-mysql-session')

// const sessionMysqlConfig = {
//   user: config.database.USERNAME,
//   password: config.database.PASSWORD,
//   database: config.database.DATABASE,
//   host: config.database.HOST
// }
app.keys = ['some secret hurr'];
const sessionConfig = {
    key: 'USER_SID',
    maxAge: 864000000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    secure: false,
    sameSite:null
}

app.use(session(sessionConfig, app))

// 如何记录一个请求所花时间
// 第一个 计时开始
// app.use(async (ctx, next) => {
//   console.log('中间件1');
//   const start = Date.now();
//   await next();
//   const end = Date.now();
//   console.log('请求花费时间', end - start, 'ms');
// })

// const getData = async () => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 1000)
//   })
// }

// app.use(async (ctx, next) => {
//   console.log('中间件2');
//   const data = await getData()
//   ctx.body = { data }
// })

// views 在哪里
app.use(staticCache(path.join(__dirname, './public'), {dynamic: true}, {
  maxAge: 15*24*60*60
}))
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
// 
app.use(bodyParser({
  formLimit: '1mb'
}))

app.use(signupRouter.routes())
app.use(signinRouter.routes())
app.use(signoutRouter.routes())
app.use(postsRouter.routes())


app.listen(config.port)
console.log(`listen on port ${config.port}`);