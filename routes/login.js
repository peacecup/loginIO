var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/logIO');

router.post('/', function(req, res) {
    var collection = db.get('user');
    collection.find({
            loginName: req.body.loginName
          //  password: req.body.password
        },
        function(err, data) {
            if (err) {
                res.json({ message: '系统异常！', flag: false });
                throw err;
            }
            if (data == null || data.length == 0) {
                res.json({ message: '用户不存在！', flag: false });
                return;
            }else{
                if(data.password == req.body.password){
                    res.json({ flag: true, user: data });
                }else{
                    res.json({ message: '密码错误！', flag: false });
                    return;
                }
            }
            res.json({ flag: true, user: data });
        });
});

module.exports = router;
