import {isObject} from '../../utils/isObject';
import {deep} from '../../utils/deep';
import {PARAM} from '../../features/names';

export function expandPlaceholders(item, _top = null) {
    const top = _top || item;

    item.proto.input.forEach((input, i) => {
        const param = item.params[i];

        if (isObject(param)) {
            expandPlaceholders(param, top);
        }

        if (input[PARAM.placeholder] && isObject(param)) {
            expand(input, param, item, top, i);
        }
    });
}

function expand(input, param, item, top, index) {
    const name = newFunctionName(top, item.name);
    let exInput = deep(item.proto.input).splice(index, 1)[0];
    let fname = newFunctionName(top, exInput[PARAM.name]);

    top.functions = top.functions || {};
    top.functions[name] = {
        name: name,
        proto: {
            glsl: name,
            use: item.proto.glsl,
            placeholder: exInput[PARAM.placeholder],
            target: fname
        }
    };

    exInput = item.proto.input.splice(index, 1)[0];
    let exParam = item.params.splice(index, 1);

    top.functions[fname] = {
        name: fname,
        params: exParam,
        proto: {
            glsl: fname,
            output: exInput[PARAM.type],
            input: [exInput]
        }
    };

    item.proto.glsl = name;
}

function newFunctionName(top, _name) {
    top.functions = top.functions || {};
    let name = _name;
    while (name += '_', top.functions[name]) {
    }
    return name;
}
