import {isObject} from './isObject';

export function each(obj, fnc) {
    if (isObject(obj)) {
        Object.keys(obj).forEach((key) => fnc(key, obj[key]));
    }
}
