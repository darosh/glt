import {VALUE} from './names';

export let Distort = {
    params: [['float', 'weight', 1, [-8, 8]], ['float', VALUE, 1, [-1, 1]]]
};

export let Warp = {
    params: [['float', 'wx', 1, [-8, 8]], ['float', 'wy', 1, [-8, 8]], ['float', VALUE, 1, [-1, 1]], ['float', VALUE, 1, [-1, 1]]]
};

export const Rotate = {
    params: [['float', 'angle', 0, [0, 360]]]
};

export const Scale = {
    params: [['vec2', 'scale', [1, 1], [-16, 16]]]
};

export const Translate = {
    params: [['vec2', 'offset', [0, 0], [-128, 128]]]
};

export const Tile = {
    params: [['vec2', 'size', [0, 0], [2, 16]], ['float', 'mirrorX', 0, [0, 1]], ['float', 'mirrorY', 0, [0, 1]]]
};

export const Pixelate = {
    params: [['float', 'steps', 8, [2, 128]]]
};

export const Twirl = {
    params: [['float', 'weight', 8, [-16, 16]], ['float', 'size', 2, [0, 16]], ['vec2', 'offset', [0, 0], [0, 32]]]
};
