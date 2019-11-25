import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/bundle.js',
    format: 'cjs'
  },
  external: [
    'react', 
  ],
  plugins: [
    resolve({ extensions: ['.jsx', '.js'] }),
    scss(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    filesize(),
  ]
};
