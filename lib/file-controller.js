'use strict'
var fileReadImg = function(filename) {
   return fs.readFileSync(filename);
};
var fileSaveImg = function(filename, data){
   var rv = fs.writeFileSync(filename);
   return rv;
};
