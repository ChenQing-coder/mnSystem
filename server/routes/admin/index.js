const router=require('koa-router')()
const user=require('./user')
const visitor=require('./visitor')
router.use('/user',user)
router.use('/visitor',visitor)
module.exports=router.routes()
