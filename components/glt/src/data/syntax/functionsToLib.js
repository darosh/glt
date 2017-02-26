import {each} from '../../utils/each';
import {getFunction} from './getFunction';

export function functionsToLib(syntax, top) {
    each(syntax.functions, (k, fn) => {
        const c = getFunction(fn, top);
        fn.lines = c.lines;
        fn.deps = c.deps;
    });
}
