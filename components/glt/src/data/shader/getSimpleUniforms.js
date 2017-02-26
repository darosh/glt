import {pair} from '../../utils/pair';
import {unpair} from '../../utils/unpair';

export function simpleUniforms(u) {
    return unpair(pair(u).map((i) => [i[0], i[1].value]));
}
