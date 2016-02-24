var express = require('express');
var router = express.Router();
var msg = require('../common/restmsg');
var multer  = require('multer');
var url = require('url');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// 配置上传文件的路径和文件名（使用的是multer0.1.8版本）
router.use(multer({ dest: './uploads/' ,
  rename: function (fieldname, filename) {
    return filename;
  }
}));

// 文件上传
router.post("/upload",function(req,res){
  var file = req.files;
  console.log(file);
  res.send('ok');
});

module.exports = router;
