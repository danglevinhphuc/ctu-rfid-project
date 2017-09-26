var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var dbconfig = require('./config');
var mongoose = require('mongoose');

// require controllers 
// api can bo
let canbo = require("./api/controllers/canBo");
// api diemDanhRa
let diemdanhra = require("./api/controllers/diemdanhra");
// api diemDanhVao
let diemdanhvao = require("./api/controllers/diemdanhvao");
// api sinhVien
let sinhvien = require("./api/controllers/sinhvien");
// api suKien
let sukien = require("./api/controllers/sukien");
//up file
let upfile = require('./routes/upfile');


var app = express();

app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

/*** DIEU HUONG LINK API */
app.use("/api/canbo",canbo);
app.use("/api/diemdanhra",diemdanhra);
app.use("/api/diemdanhvao",diemdanhvao);
app.use("/api/sinhvien",sinhvien);
app.use("/api/sukien",sukien);
/*DIEU HUONG UPFILE*/
app.use('/',upfile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
