import {
    Scene,
    ShaderMaterial,
    Mesh,
    PlaneGeometry,
    Camera,
    WebGLRenderer
} from 'three/src/Three';

import {getUniforms} from '../data/shader/getUniforms';
import {getShaderThree} from '../data/shader/getShaderThree';
import {each} from '../utils/each';
import {deep} from '../utils/deep';
import {isArray} from '../utils/isArray';

export class Renderer {
    constructor(canvas, context) {
        this.onstep = null;
        this.camera = new Camera();
        this.camera.position.z = 1;
        this.scene = new Scene();
        this.mesh = new Mesh(new PlaneGeometry(2, 2));
        this.scene.add(this.mesh);
        this.renderer = new WebGLRenderer({canvas: canvas, context: context});
        return this;
    }

    size(value) {
        this.renderer.setSize(isArray(value) ? value[0] : value, isArray(value) ? value[1] : value);
        return this;
    }

    shader(vertex, fragment, uniforms) {
        this.uniforms = uniforms;
        this.original = deep(uniforms);
        const size = this.renderer.getSize();
        this.mesh.material = new ShaderMaterial({
            uniforms: {...uniforms, ...{resolution: {value: [size.width, size.height, 1]}}},
            vertexShader: vertex,
            fragmentShader: fragment
        });

        return this;
    }

    render(shader, libs, uniforms = {}) {
        const s = getShaderThree(shader, libs, getUniforms(uniforms));
        this.shader(s.vertexShader, s.fragmentShader, uniforms);
        this.renderer.render(this.scene, this.camera);
        return this;
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
}
