import * as path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

const builds = {
    'cjs-dev': {
        outFile: 'vue-raw-html.js',
        format: 'cjs',
        mode: 'development',
    },
    'cjs-prod': {
        outFile: 'vue-raw-html.min.js',
        format: 'cjs',
        mode: 'production',
    },
    'umd-dev': {
        outFile: 'vue-raw-html.umd.js',
        format: 'umd',
        mode: 'development',
    },
    'umd-prod': {
        outFile: 'vue-raw-html.min.js',
        format: 'umd',
        mode: 'production',
    },
    es: {
        outFile: 'vue-raw-html.module.js',
        format: 'es',
        mode: 'development',
    },
};

function getAllBuilds() {
    return Object.keys(builds).map((key) => genConfig(builds[key]));
}

function genConfig({ outFile, format, mode }) {
    const isProd = mode === 'production';
    return {
        input: './src/index.js',
        output: {
            file: path.join('./dist', outFile),
            format: format,
            globals: {
                vue: 'Vue',
            },
            exports: 'named',
            name: format === 'umd' ? 'vueRawHtml' : undefined,
        },
        external: ['vue'],
        plugins: [
            resolve(),
            replace({
                'process.env.NODE_ENV': JSON.stringify(
                    isProd ? 'production' : 'development',
                ),
            }),
            isProd && terser(),
        ].filter(Boolean),
    };
}

let buildConfig;

if (process.env.TARGET) {
    buildConfig = genConfig(builds[process.env.TARGET]);
} else {
    buildConfig = getAllBuilds();
}

export default buildConfig;
