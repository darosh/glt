import uglify from 'rollup-plugin-uglify';
import node from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';

function glsl() {
    return {
        transform(code, id) {
            if (/\.glsl$/.test(id) === false) return;

            var transformedCode = 'export default ' + JSON.stringify(
                    code
                        .replace(/[ \t]*\/\/.*\n/g, '') // remove //
                        .replace(/[ \t]*\/\*[\s\S]*?\*\//g, '') // remove /* */
                        .replace(/\n{2,}/g, '\n') // # \n+ to \n
                ) + ';';
            return {
                code: transformedCode,
                map: {mappings: ''}
            };
        }
    };
}

export default {
    entry: path.join(__dirname, 'index.js'),
    dest: path.join(__dirname, path.basename(__dirname) + '.js'),
    format: 'umd',
    // sourceMap: true,
    plugins: [
        node(),
        commonjs(),
        glsl(),
        babel(babelrc()),
        uglify()
    ]
};
