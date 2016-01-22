var path = require('path');
var fse = require('fs-extra');

var distDir = path.resolve(__dirname, '../../dist');
fse.removeSync(distDir);