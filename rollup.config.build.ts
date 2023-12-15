import type { RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';
import cleaner from 'rollup-plugin-cleaner';

const config: RollupOptions[] = [
  {
    input: 'src/index.ts',
    output: [
      {
        // dir: 'dist',
         // 打包后文件
        file: 'dist/index.js',
        format: 'umd',
        name: 'DomInspector',
      },
    ],
    plugins: [
      typescript({
        compilerOptions: {
          declaration: true,
          outDir: 'dist',
        }
      }),
      postcss(),
      uglify(),
      cleaner({
        targets: [
          './dist/'
        ]
      })
    ],
  },
  {
    input: 'demo/index.ts',
    output: [
      {
        dir: 'demo',
        format: 'umd',
      },
    ],
    plugins: [
      typescript(),
      postcss(),
    ],
  }
];

export default config;