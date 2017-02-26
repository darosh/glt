import {features} from '../../features/index';
import {POS} from '../../features/names';
import {isObject} from '../../utils/isObject';

export function compositionToTree(rest, _transforms, top = true) {
    if (rest && rest.data) {
        const data = compositionToTree([...rest.data]);

        if (top) {
            return {...rest, data: data};
        } else {
            return data;
        }
    }

    if (rest && rest.length) {
        const component = rest.pop();
        const tree = {};
        const transforms = _transforms || [];

        if (component.transform) {
            transforms.push(component);
            return compositionToTree(rest, transforms);
        } else if (component.colorize || component.desaturate || component.modify) {
            tree.name = component.colorize || component.desaturate || component.modify;
            tree.params = [compositionToTree(rest, transforms), ...(component.params || [])];
        } else if (component.tint) {
            tree.name = 'Tint';
            const tint = component.tint;
            delete component.tint;
            rest.push(component);
            tree.params = [compositionToTree(rest, transforms), tint];
        } else if (component.blend) {
            tree.name = component.blend;
            tree.params = [
                compositionToTree(rest, transforms), {
                    name: component.generator,
                    params: [...transformsToTree(transforms, component.generator), ...(component.params || [])]
                }
            ];

            if (component.opacity !== undefined) {
                tree.params.push(component.opacity);
            }
        } else if (component.generator) {
            tree.name = component.generator;
            tree.params = [...transformsToTree(transforms, component.generator), ...transformParams(component.params/*, transforms*/)]
        }

        return tree;
    } else {
        return 1;
    }
}

function transformParams(_params/*, transforms*/) {
    let params = _params || [];

    return params.map((param) => {
        if (isObject(param) && param.data) {
            // console.log(param.data, transforms);
            return compositionToTree([...param.data]/*, [...transforms]*/);
        } else {
            return param;
        }
    });
}

export function transformsToTree(transforms, name) {
    if (features.generator[name].position === false) {
        return [];
    } else {
        return [transformIteration(transforms ? [...transforms] : [])];
    }
}

function transformIteration(rest) {
    if (!rest || !rest.length) {
        return POS;
    } else {
        const last = rest.pop();

        return {
            name: last.transform,
            params: [transformIteration(rest), ...transformParams(last.params)]
        };
    }
}
