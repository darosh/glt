import {isObject} from '../utils/isObject';
import {isArray} from '../utils/isArray';

export const dataFormat = {
    UNKNOWN: -1,
    GRAPH: 0,
    TREE: 1,
    SYNTAX: 2
};

export function formatOf(obj) {
    if (isObject(obj.data)) {
        return dataFormat.TREE;
    } else if (isArray(obj.data)) {
        return dataFormat.GRAPH;
    }

    return dataFormat.UNKNOWN;
}
