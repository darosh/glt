import {features} from '../features/index';
import {PARAM, VALUE} from '../features/names';

export function generatorGenerators() {
    const ret = [];
    const keys = Object.keys(features.generator);

    for (let i = 0; i < keys.length; i++) {
        ret.push(getGenerator(keys[i], keys[i]));
        const examples = features.generator[keys[i]].examples || [];

        for (let j = 0; j < examples.length; j++) {
            ret.push(getGenerator(keys[i], keys[i], examples[j], j + 1));
        }
    }

    return ret;
}

function getGenerator(name, title, params = null, index = 0) {
    const generator = features.generator[name];
    const deps = ['Length', 'SinX', 'SinY'];
    const ret = {
        title: title ? title : undefined,
        example: index ? index.toString() : undefined,
        data: [
            [
                name,
                ...(params ? params : (!generator.params ? [] : generator.params
                    .filter((param) => !param[PARAM.placeholder])
                    .map((param) => {
                        return param[1] === VALUE ? getGenerator(deps.shift()) : param[2];
                    })))
            ]
        ]
    };

    if (generator.scale && (generator.scale !== 1)) {
        ret.data.push([
            'Scale',
            [generator.scale, generator.scale]
        ]);
    }

    if (generator.normalized === false) {
        ret.data.push(['Normalize']);
    }

    return ret;
}
