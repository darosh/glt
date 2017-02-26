import {each} from '../../utils/each';

export function getDefines(uniforms) {
    const lines = [];

    each(uniforms, (key) => {
        lines.push('#define' + ' ' + key + ' ' + format(uniforms[key].proto[0], uniforms[key].value))
    });

    return lines.join('\n');
}

function format(type, p) {
    if (type === 'float') {
        let s = p.toString();

        if (s.indexOf('.') >= 0) {
            return s;
        } else {
            return s + '.';
        }
    } else {
        return type + '(' + p.map((p) => format('float', p)).join(', ') + ')';
    }
}
