'use strict'
const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {
    /*
        makes an empty array Validdir. Reads the directory given, and runs a
        callback through readdir. If there is an error, it throws that error to
        the upper callback. If not, it iterates through the directory, checking
        if each filename has the requested extension. It then passes this data
        to the upper callback.
    */
    let validDir = [];
    fs.readdir(dir, (err, data) => {
        if (err) {return callback(err)}
        for (let i of data) {
            if (path.extname(i) === "." + ext) {
                validDir.push(i)
            }
        }
        callback(null, validDir)
    });
}