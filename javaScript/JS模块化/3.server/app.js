var uniq = require('uniq');

var module1 = require('./modules/module1');
var module2 = require('./modules/module2');
var module3 = require('./modules/module3');

module1.foo();

module2();

module3.foo();

console.log(uniq(module3.arr));