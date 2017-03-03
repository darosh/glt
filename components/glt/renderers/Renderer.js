import {
    Scene,
    ShaderMaterial,
    Mesh,
    PlaneGeometry,
    Camera,
    WebGLRenderer,
    WebGLRenderTarget
} from 'three/src/Three';

import {getUniforms} from '../data/shader/getUniforms';
import {getShaderThree} from '../data/shader/getShaderThree';
import {each} from '../utils/each';
import {deep} from '../utils/deep';
import {isArray} from '../utils/isArray';

export class Renderer {
    constructor(canvas) {
        this.onstep = null;
        this.camera = new Camera();
        this.camera.position.z = 1;
        this.scene = new Scene();
        this.mesh = new Mesh(new PlaneGeometry(2, 2));
        this.scene.add(this.mesh);
        this.canvas = canvas;
        this.renderer = new WebGLRenderer({canvas: canvas});
        return this;
    }

    size(value) {
        this._size = isArray(value) ? value : [value, value];
        this.renderer.setSize(this._size[0], this._size[1]);
        return this;
    }

    shader(vertex, fragment, uniforms) {
        this.uniforms = uniforms;
        this.original = deep(uniforms);
        this.mesh.material = new ShaderMaterial({
            uniforms: {...uniforms, ...{resolution: {value: [this._size[0], this._size[1], 1]}}},
            vertexShader: vertex,
            fragmentShader: fragment
        });

        return this;
    }

    render(shader, libs, uniforms = {}, offScreen = null) {
        const s = getShaderThree(shader, libs, getUniforms(uniforms), offScreen);
        this.shader(s.vertexShader, s.fragmentShader, uniforms);

        if (offScreen) {
            console.log(s.fragmentShader);
            if (!this.target || (this.target && ((this.target.width !== offScreen[0]) || (this.target.height !== offScreen[1])))) {
                this.target = new WebGLRenderTarget(offScreen[0], offScreen[1], {
                    depthBuffer: false,
                    stencilBuffer: false
                });
            }

            this.renderer.render(this.scene, this.camera, this.target);
        } else {
            this.renderer.render(this.scene, this.camera);
        }

        return this;
    }

    pixels() {
        if (!this.buffer || (this.buffer.length !== (this.target.width * this.target.height * 4))) {
            this.buffer = new Uint8Array(this.target.width * this.target.height * 4);
        }

        this.renderer.readRenderTargetPixels(this.target, 0, 0, this.target.width, this.target.height, this.buffer);
        return this.buffer;
    }

    update() {
        this.renderer.render(this.scene, this.camera);
    }

    reset() {
        each(this.original, (k, v) => {
            this.uniforms[k].value = deep(v.value);
        });

        this.update();
    }

    draw(canvas) {
        canvas.getContext('2d').drawImage(
            this.canvas,
            0, 0, this._size[0], this._size[1],
            0, 0, canvas.width, canvas.height
        );
    }

    drawTarget(canvas) {
        let ct = canvas.getContext('2d');
        let id = ct.getImageData(0, 0, canvas.width, canvas.height);
        id.data.set(new Uint8ClampedArray(this.pixels().buffer));
        ct.putImageData(id, 0, 0, 0, 0, canvas.width, canvas.height);

        // window.createImageBitmap(
        //     new window.ImageData(
        //         new Uint8ClampedArray(this.pixels().buffer), this.target.width, this.target.height),
        //     0, 0, this.target.width, this.target.height).then((id) => {
        //     canvas.getContext('2d').drawImage(
        //         id,
        //         0, 0, this.target.width, this.target.height,
        //         0, 0, canvas.width, canvas.height
        //     );
        // });
    }
}
