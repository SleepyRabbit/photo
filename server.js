/**
 * Created by houenxing on 17/6/28.
 */
/* Nodejs app to deal with get and post request */

"use strict";

var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var multiparty = require('multiparty');

var formidable = require('formidable')
var util = require("util");

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))

console.log('Start listening port 3000...');

http.createServer(function (req, res) {
  var datas = "";
  // req.setEncoding('utf-8');
  console.log("Detecting request!");
  if(req.method === "GET") {
    console.log('Get method!');
  }
  if(req.method === "POST") {
    console.log("Post method!");

    var form = new formidable.IncomingForm();

    //这里formidable会对upload的对象进行解析和处理
    form.parse(req, function(err, fields, files) {
      console.log(fields);
      console.log(files);
      res.write('received upload:\n\n');
      // res.writeHead(200, {'content-type': 'text/plain'});
      // res.write('received upload:\n\n');
      // res.end(util.inspect({fields: fields, files: files}));
    });

    // form.type= "form-data";
    //
    // form.parse(req, function () {
    //   console.log('parse!');
    // });

    // req.on("data", chunk => {
    //   // console.log("ondata");
    //   datas += chunk;
    // });
    // req.on('end', function () {
    //
    //   console.log(datas);
    //   var form = new formidable.IncomingForm();
    //   form.type= "form-data";
    //   // form.encoding = 'utf-8';
    //
    //   // form.parse(datas, function () {
    //
    //   });

      // let temp = qs.parse(datas);
      // console.log(temp);


      // var form = new multiparty.Form();
      // form.parse(datas, function (err, fields, files) {
      //   console.log(fields);
      // });


      // req.header("Access-Control-Allow-Origin", "*");
      // req.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      // req.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
      //
      // let form = new formidable.IncomingForm();
      // form.encoding = 'utf-8'; // 编码
      // form.keepExtensions = true; // 保留扩展名
      // form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
      // form.uploadDir = 'C:/Users/Administrator/Downloads'  // 存储路径
      // form.parse(datas,function(err,fileds,files){ // 解析 formData数据
      //
      //   console.log("Start parsing files.");
      //
      //   if(err){ return console.log(err) }
      //
      //   let imgPath = files.img.path // 获取文件路径
      //   let imgName = "./test." + files.img.type.split("/")[1] // 修改之后的名字
      //   let data = fs.readFileSync(imgPath) // 同步读取文件
      //
      //   fs.writeFile(imgName,data,function(err){ // 存储文件
      //
      //     if(err){ return console.log(err) }
      //
      //     fs.unlink(imgPath,function(){}) // 删除文件
      //     res.json({code:1})
      //   })
      // })

    // })


  }
  // console.log(req);
  // req.on('data', function (dat) {
  //   console.log('onData!');
  //   console.log(dat);
  // });
  // req.on('end', function () {
  //   console.log('End!');
  // })
}).listen(3000);
