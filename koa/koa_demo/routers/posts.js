const router = require('koa-router')();
const controller = require('../controller/c-posts')
const checkLogin = require('../middlewares/check').checkLogin
router.get('/', controller.getRedirectPosts)
//restful-api?

router.get('/posts', controller.getPosts)
// 单篇文章详情页
router.get('/posts/:postId', controller.getSinglePosts)
router.get('/create', checkLogin, controller.getCreate)
// 发表文章
router.post('/create', controller.postCreate)
// 删除单篇文章
// router.delete('/posts/:postId', checkLogin, controller.postDelete)
// 新增评论
// router.post('./posts/:postId', checkLogin, controller.postComment)
module.exports = router
