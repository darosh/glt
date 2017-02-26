import {isObject} from '../../utils/isObject';
import {each} from "../../utils/each";

export function detectRequired(syntax, _top) {
    const top = _top || syntax;
    top.required = top.required || [];

    if (top.required.indexOf(syntax.proto.glsl) === -1) {
        top.required.push(syntax.proto.glsl);
    }

    syntax.params.forEach((param) => {
        if (isObject(param)) {
            detectRequired(param, top);
        }
    });

    if (syntax.functions) {
        each(syntax.functions, (k, v) => {
            if (!v.params) {
                return;
            }

            v.params.forEach((param) => {
                if (isObject(param)) {
                    detectRequired(param, top);
                }
            });
        });
    }
}
