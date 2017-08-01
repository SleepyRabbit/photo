/**
 * Created by houenxing on 17/6/28.
 */
"use strict";

const express = require("express")
const fs = require("fs")
const formidable = require('formidable')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/test",function(req,res){

  console.log("post");
  // 跨域
  res.setHeader("Access-Control-Allow-Origin", "*");

  let form = new formidable.IncomingForm();
  form.encoding = 'utf-8'; // 编码
  form.keepExtensions = true; // 保留扩展名
  form.maxFieldsSize = 2 * 1024 * 1024; // 文件大小
  form.uploadDir = 'C:/Users/Administrator/Downloads'  // 存储路径
  form.parse(req,function(err,fileds,files){ // 解析 formData数据
    if(err){ return console.log(err) }

    let imgPath = files.img.path // 获取文件路径
    let imgName = "./test." + files.img.type.split("/")[1] // 修改之后的名字
    let data = fs.readFileSync(imgPath) // 同步读取文件

    fs.writeFile(imgName,data,function(err){ // 存储文件

      if(err){ return console.log(err) }

      fs.unlink(imgPath,function(){}) // 删除文件
      res.json({code:1})
    })
  })
})

app.listen(3000)

