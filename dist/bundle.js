'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

// foo.js
var foo = 'hello world!';

var version = "1.0.0";

// main.js

console.log('version ' + version);
console.log('-------lodash:', _.defaults({
  'a': 1
}, {
  'a': 3,
  'b': 2
}));
var main = (function () {
  console.log(foo);
})();

module.exports = main;
