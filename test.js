/**
 * Created by houenxing on 17/7/4.
 */
"use strict";

var http = require('http');
var express = require('express');

var app = express();

app.post('/', function (req, res) {
  console.log('test');
  // console.log(res);
  res.send('hello post');
})

http.createServer(app).listen(3000);
