const router=require('koa-router')()
require('../../controller/admin/visitor')
const visitor=require('../../controller/admin/visitor')
const auth=require('../../utils/auth')
router.get('/queryVisitorNumber',auth(),visitor.queryVisitorNumber);
module.exports=router.routes();