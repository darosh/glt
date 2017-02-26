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
        this.renderer.setSize(value, value);
        return this;
    }

    shader(vertex, fragment, uniforms) {
        this.uniforms = uniforms;
        this.original = deep(uniforms);

        this.mesh.material = new ShaderMaterial({
            uniforms: uniforms,
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

        if (this.onstep) {
            this.onstep();
        }
    }

    loop() {
        if (this.running) {
            this.step();
            this.update();
            requestAnimationFrame(() => this.loop());
        }
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.loop();
        }
    }

    stop() {
        this.running = false;
    }

    reset() {
        each(this.original, (k, v) => {
            this.uniforms[k].value = deep(v.value);
        });

        if (!this.running) {
            this.update();
        }
    }

    step(direction = 1) {
        let K = 0.01;

        each(this.uniforms, function (k, v) {
            if (!v.value.length) {
                v.value += v.K || K;
                if (v.value > v.proto[3][1]) {
                    v.K = -K;
                    v.value = v.proto[3][1];
                } else if (v.value < v.proto[3][0]) {
                    v.K = K;
                    v.value = v.proto[3][0];
                }
            } else {
                v.value.forEach(function (d, i) {
                    v.K = v.K || [];
                    v.value[i] += v.K[i] || K;
                    if (v.value[i] > v.proto[3][1]) {
                        v.K[i] = -K;
                        v.value[i] = v.proto[3][1];
                    } else if (v.value[i] < v.proto[3][0]) {
                        v.K[i] = K;
                        v.value[i] = v.proto[3][0];
                    }
                });
            }
        });
    }
}
