// main.js
import foo from './foo.js';
import { version } from '../package.json'; // 利用json插件可以获得package.json中的数据
console.log('version ' + version);
import _ from 'lodash';
console.log('-------lodash:', _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
export default (function () {
    console.log(foo);
})();