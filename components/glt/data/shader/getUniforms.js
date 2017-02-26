import {each} from '../../utils/each';

export function getUniforms(uniforms) {
    const lines = [];

    each(uniforms, (key) => {
        lines.push('uniform' + ' ' + getType(uniforms[key]) + ' ' + key + ';')
    });

    return lines.join('\n');
}

function getType(u) {
    if (u.value.length) {
        return 'vec' + u.value.length;
    } else {
        return 'float';
    }
}
