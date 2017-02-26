import {features} from '../features/index';
import {VALUE} from '../features/names';

export function exampleGenerators() {
    const ret = [];
    const keys = Object.keys(features.generator);

    for (let i = 0; i < keys.length; i++) {
        ret.push(getGenerator(keys[i]));

        const examples = features.generator[keys[i]].examples || [];

        for (let j = 0; j < examples.length; j++) {
            ret.push(getGenerator(keys[i], examples[j], j + 1));
        }
    }

    return ret;
}

function getGenerator(name, params = null, index = 0) {
    const generator = features.generator[name];
    const deps = ['Length', 'SinX', 'SinY'];
    const ret = {
        title: name,
        example: index ? index.toString() : undefined,
        data: [
            {
                generator: name,
                params: params ? params : (!generator.params ? [] : generator.params.map((param) => {
                    return param[1] === VALUE ? getGenerator(deps.shift()) : param[2];
                }))
            }
        ]
    };

    if (generator.scale) {
        ret.data.push({
            transform: 'Scale',
            params: [[generator.scale, generator.scale]]
        });
    }

    if (generator.normalized === false) {
        ret.data.push(
            {
                modify: 'Normalize'
            })
    }

    return ret;
}
