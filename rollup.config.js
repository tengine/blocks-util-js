import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'es'
  },
  external: [
    'react', 
    'react-dom',
  ],
  plugins: [
    resolve({ extensions: ['.jsx', '.js'] }),
    scss(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    filesize(),
  ]
};
