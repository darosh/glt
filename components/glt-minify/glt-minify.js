var tokenizer = require('glsl-tokenizer/stream');
var parser = require('glsl-parser');
var deparser = require('glsl-deparser');
var fs = require('fs');
var path = require('path');

for (var i = 2; i < process.argv.length; i++) {
    var from = process.argv[i];
    var parsed = path.parse(from);
    parsed.ext = '.min' + parsed.ext;
    delete parsed.base;
    var to = path.format(parsed);
    console.log(from, ' -> ', to);
    min(from, to);
}

function min(from, to) {
    fs.createReadStream(from)
        .pipe(tokenizer())
        .pipe(parser())
        .pipe(deparser(true, ' '))
        .pipe(fs.createWriteStream(to));
}
