/**
 * Created by houenxing on 17/7/4.
 */
var formidable = require('formidable'),
  http = require('http'),
  sys = require('util');

http.createServer(function(req, res) {
  // console.log("data");
  // if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    console.log("data!");
    // // parse a file upload
    console.log(req);
    var form = new formidable.IncomingForm();

    //这里formidable会对upload的对象进行解析和处理
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(sys.inspect({fields: fields, files: files}));
    });
    // return;
  // }
}).listen(3000);
