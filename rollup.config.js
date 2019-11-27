import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from "rollup-plugin-replace";

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: "es" },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'BlocksUtilJs',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx"]
    }),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
  ]
};
