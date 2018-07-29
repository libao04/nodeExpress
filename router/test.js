var express = require('express');

var router = express.Router();

router.get('/getContent',function(req,res,next){
    res.status(200).json({
        // data:[{name:'A',age:'18'},{name:'B',age:'19'},{name:'C',age:'20'}],
        data:'返回数据啦！！！',
        msg:'请求数据成功',
        meta:{code:1}
    });
})
module.exports=router;