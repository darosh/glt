// npm i headless-gl

const fs = require('fs');
const samples = require('../components/glt-samples/glt-samples').samplesDemo;
require('../components/three/three');
require.cache[require.resolve('three/src/Three.js')] = require.cache[require.resolve('../components/three/three')];
const glt = require('../components/glt/glt');

const width = 128;
const height = 128;
const pixels = new Uint8Array(width * height * 4);

const gl = require('gl')(width, height, {preserveDrawingBuffer: true});
gl.addEventListener = () => {
};

const renderer = new glt.Renderer(gl).size(width);


samples.forEach((s, index) => {
        const comp = glt.compile(s);
        renderer.render(comp.shader, comp.code);
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

        let t = ['P3\n# gl.ppm\n', width, " ", height, '\n255\n'].join('');
        let i, z, l;
        for (z = pixels.length - width * 4; z >= 0; z -= width * 4) {
            l = z + width * 4;

            for (i = z; i < l; i += 4) {
                t += pixels[i] + ' ' + pixels[i + 1] + ' ' + pixels[i + 2] + ' ';
            }
        }

        fs.writeFile('test/demo/' + (index < 10 ? '0' : '') + index + '.ppm', t);
    }
);
