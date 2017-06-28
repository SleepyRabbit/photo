/**
 * Created by houenxing on 17/6/28.
 */
/* Nodejs app to deal with get and post request */

"use strict";

var http = require("http");
var fs = require("fs");
var qs = require("querystring");

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
    req.on("data", chunk => {
      datas += chunk;
    });
    req.on('end', function () {
      let temp = qs.parse(datas);
      console.log(temp);
    })
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
