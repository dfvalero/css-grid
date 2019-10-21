const path = require('path');

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'dist'),
    entryPath: path.resolve(__dirname, '../', 'src/index.js'),
    templatePath: path.resolve(__dirname, '../', 'public/index.html'),
    jsFolder: 'public/js'
};
