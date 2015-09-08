// now has the file buffer as first arg.
// added transformations array and args array - those will be passed from app.js
var Bitmap = function(buffer, transformations, args){
    this.transformations = transformations; // the transformations array of functions
    this.destination_file = args.destination_file; // the output file path from args obj
    this.offsetData = {
        'palette_size' : buffer.readUInt32LE(46),
        'palette_table_start' : buffer.readUInt32LE(54),
        'bmp_data_start' : this.offsetData.palette_table_start + this.offsetData.palette_size*4,
        'bmp_data_size' : buffer.readUInt32LE(16), // info in Dib header, 2 bytes offset, so 14 +2
    };
    this.colorPallete = this.buffer.splice(54, 1024); // could you verify that this is the proper length? 4x bytes per color (256 colors)
    this.colorsArray = [];
};
Bitmap.prototype.palleteColorData = function() { // assigns RGB data to pallete
    for(var i = 0; i < colorPallete.length; i += 3) {
        var colorObject = {};
        colorObject.blue = this.colorPallete.readUInt8(i); // based on wiki it appears blue, green, red order of pixel data
        colorObject.green = this.colorPallete.readUInt8(i + 1);
        colorObject.red = this.colorPallete.readUInt8(i + 2);
        this.colorArray.push(colorObject); // pushes the pixelation data into Bitmap.colorPallete array
    };
}
//     this.transformed_buffer = null;
//     this.run_transforms = function() {
//         //
//         var bmp_matrix = this.readSection(
//                 this.offset.bmp_data_start, // start
//                 this.offsetData.bmp_data_size, // end
//                 this.buffer // buffer to read
//                 );
//         var palette_data = this.readSection(
//                 this.offset.palette_table_start, // start
//                 this.offsetData.palette_size, // end
//                 this.buffer // buffer to read
//                 );
//         // looping through the transform funcs and calling them on our buffer
//         var i;
//         var func_result; // temp var that holds result of each transformation
//         for(i=0;i<this.transformations.length;i++){
//             func_result = this.transformations[i](this.bmp_matrix,palette_data);
//         }
//         this.transformed_buffer = func_result;
//         // assigning transform results to buffer_copy
//         // having a copy is going to be useful for testing
//         // we can call the fileSaveImg with (bitmap.buffer_copy) as the arg
//     };
// };
// Bitmap.prototype.readSection = function(start, end, buffer){
//     // I think it's simplest to attach a single function
//     // that reads a section to the prototype.

//     // note i'm incrementing by 4, not 3, because these are rgba blocks, so 4 bytes.
//     // also, it's end * 4 because we're reading in single bytes, and the palette section is
//     // 256 colors X 4 bits per color.

//     var _buf = [];
//     for (i = 0; i < (end * 4); i+=4) {
//         var color = [];
//         for (j = 0; j < 4; j++) {
//         // inner loop groups each color into an array of 4 bytes
//             byte = bmp_buffer.readUInt8(start + i + j).toString();
//             color.push(byte);
//         }
//         _buf.push(color);
//     }
//     return _buf;
// };
module.exports = {
    Bitmap: Bitmap,
};
