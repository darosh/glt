import {isObject} from '../../utils/isObject'
import {isArray} from '../../utils/isArray'

let flat = null;

export function treeToFlat(raw, level = 0) {
    if (!level) {
        flat = [];
    }

    flat.push(raw);

    raw.level = level;
    const children = [];
    (raw.params || []).forEach((param) => {
        if (isObject(param)) {
            // param.parent = tree;
            children.push(param);
            treeToFlat(param, level + 1);
        } else if (isArray(param)) {
            param.forEach((p) => {
                if (isObject(p)) {
                    treeToFlat(p, level + 1);
                }
            })
        }
    });

    // if (!children.length) {
    //     raw.last = true;
    // }

    if (!level) {
        const f = flat;
        flat = null;
        f.sort((a, b) => b.level - a.level);
        f.forEach((d) => delete d.level);
        return f;
    }
}
