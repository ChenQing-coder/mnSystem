const router=require('koa-router')()
const Link=require('../../controller/admin/link')
const auth=require('../../utils/auth')
router.get('/queryLink',auth(),Link.queryLink)
      .post('/insertLink',auth(),Link.insertLink)
      .post('/deleteLink',auth(),Link.deleteLink)
module.exports=router.routes()      