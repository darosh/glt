import {features, list, types} from '../../features/index';
import {POS} from '../../features/names';
import {isObject} from '../../utils/isObject';
import {isString} from '../../utils/isString';
import {isNumber} from '../../utils/isNumber';
import {deep} from '../../utils/deep';

export function graphToTree(layers, transforms = []) {
    layers = layers.data ? deep(layers.data) : layers;

    if (!layers || !layers.length) {
        return;
    }

    layers = expandBlend(layers);

    const layer = layers.pop();
    const item = {name: layer[0], id: layer.id};

    switch (list[layer[0]].type) {
        case types.transform:
            transforms.push(layer);
            return graphToTree(layers, transforms);
        case types.blend:
            if (isObject(layer[1])) {
                item.params = [
                    graphToTree(layer[1], [...transforms]),
                    graphToTree(layer[2], [...transforms]),
                    ...layer.slice(3)
                ];
            }
            return item;
        case types.generator:
            item.params = [...getTransforms(transforms, layer[0]), ...getParams(layer, transforms)];
            return item;
        case types.modify:
        case types.colorize:
        case types.desaturate:
            item.params = [graphToTree(layers, transforms), ...layer.slice(1)];
            return item;
    }
}

function expandBlend(layers) {
    for (let i = layers.length - 1; i >= 0; i--) {
        let l = layers[i];
        if (list[l[0]].type === types.blend) {
            let n = isNumber(l[1]);
            if (isString(l[1]) || (n && isString(l[2]))) {
                const g = l.slice(1 + n);
                const u = l[1];
                l.splice(1 + n);
                l[1] = {data: layers.slice(0, i)};
                l[2] = {data: [g, ...layers.slice(i + 1)]};
                if (n) {
                    l[3] = u;
                }
                return [l];
            }
            return layers;
        }
    }
    return layers;
}

function getParams(layer = [], transforms = []) {
    return layer.slice(1).map((param) => {
        if (isObject(param) && param.data) {
            return graphToTree([...param.data], [...transforms]);
        } else {
            return param;
        }
    });
}

function getTransforms(transforms, name) {
    if (features.generator[name].position === false) {
        return [];
    } else {
        return [getTransform(transforms ? [...transforms] : [])];
    }
}

function getTransform(layers) {
    if (!layers || !layers.length) {
        return POS;
    } else {
        const layer = layers.pop();

        return {
            name: layer[0],
            params: [getTransform(layers), ...getParams(layer)]
        };
    }
}
