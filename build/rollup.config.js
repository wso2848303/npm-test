// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

const path = require('path');
const resolveFile = function (filePath) {
    return path.join(__dirname, '..', filePath)
}

export default {
    input: resolveFile('src/main.js'),
    output: {
        file: resolveFile('dist/bundle.js'),
        format: 'cjs',
    },
    plugins: [
        commonjs(),
        resolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        json(),
        babel({
          exclude: 'node_modulesnpm/**', // 只编译我们的源代码
          runtimeHelpers: true,
      }),
    ],
    external: id => {
      return /@babel\/runtime/.test(id) || /lodash/.test(id);
  }
};