import {isObject} from '../utils/isObject';
import {isArray} from '../utils/isArray';
import {isString} from '../utils/isString';

export const dataFormat = {
    UNKNOWN: -1,
    COMPOSITION: 0,
    TREE: 1,
    SYNTAX: 2,
    GRAPH: 2
};

export function formatOf(obj) {
    if (isObject(obj.data)) {
        return dataFormat.TREE;
    } else if (isArray(obj.data)) {
        if(isString(obj.data[0][0])) {
            return dataFormat.GRAPH;
        } else {
            return dataFormat.COMPOSITION;
        }
    }
}
