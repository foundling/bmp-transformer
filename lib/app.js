'use strict';
// our imports so we can make the image magic happen
var fs = require('fs');
var argParse = require('./lib/argParse');
var readImg = require('./lib/filecontrol.js').readImg;
var writeImg = require('./lib/filecontrol.js').writeImg;
var Bitmap = require('./lib/bitmap-constructor.js');
var args = argParse(process.argv);
var transformations = fs.readdirSync('transformations').map( function(filename, index, array){
    // input is a filename in trans dir
    var filepath = './transformations/' + filename;
    return require(filepath);
});
var buffer_data = readImg(__dirname + '/img/coffee.bmp');
var bitmap = new Bitmap(buffer_data, transformations, args);
bitmap.transform();
writeImg(bitmap.buffer_copy);
