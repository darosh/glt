import {treeToFlat} from '../tree/treeToFlat';
import {FLOAT, VEC3} from '../../features/names';
import {syntaxToShader} from './syntaxToShader';

export function syntaxToPartialShaders(tree) {
    const flat = treeToFlat(tree.data);
    const filtered = flat.filter((f)=> f.proto.output === FLOAT || f.proto.output === VEC3);
    return filtered.map((f) => {
        return syntaxToShader(f, true, tree.data);
    });
}
