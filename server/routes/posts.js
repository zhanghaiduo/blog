const Router = require('koa-router')
const router = new Router()
const PostsController = require('../controller/Posts')
router.get('/list', PostsController.list)


module.exports = router
