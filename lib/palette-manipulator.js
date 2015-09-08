'use strict';
 // pull in information from bitmap-constructor Bitmap.pixelatedColors
var ColorChanges = function(data) {
    this.invertedColors = [];
    this.grayscaleColors = [];
}
 ColorChanges.prototype.inverted = function() {
     for (var i = 0; i < Bitmap.colorsArray.length; i += 3) {
         var colors = Bitmap.colorsArray;
         colors.blue = 255 - colorsArray[i];
         colors.green = 255 - colorsArray[i +1];
         colors.red = 255 - colorsArray[i + 2];
     };
 };
 ColorChanges.prototype.grayscale = function(){
     for (var i = 0; i < Bitmap.colorsArray.length; i += 3) {
         var average = (colorsArray[i] + colorsArray[i + 1] + colorsArray[i +2]) /3;
         var colors = Bitmap.colorsArray
         colors[i] = average;
         colors[i +1] = average;
         colors[i +2] = average;
     };
 };
 modules.export = ColorChanges;
