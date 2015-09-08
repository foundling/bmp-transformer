'use strict';
var fs = require('fs');
var IO = function() {
    this.fileReadImg = function(filename) {
       return fs.readFileSync(filename);
    };
    this.fileSaveImg = function(filename, data){
       var rv = fs.writeFileSync(filename);
       return rv;
    };
}
module.exports = exports = IO;
