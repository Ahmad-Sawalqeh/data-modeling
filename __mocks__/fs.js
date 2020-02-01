/* eslint-disable no-undef */
'use strict';

module.exports = exports = {};

var fileContents = '';

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
  else {
    cb(null, Buffer.from(fileContents));
  }
};

exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
  else {
    fileContents = buffer;
    cb(null, true);
  }
};