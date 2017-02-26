export const Normalize = {};
export const Denormalize = {};
export const Invert = {};
export const Abs = {};
export const Cos = {};
export const Sin = {};

export const AddValue = {
    params: [['float', 'value', 0.5, [-2,2]]]
};

export const Min = {
    glsl: 'min',
    params: [['float', 'value', 0.5, [-2,2]]]
};

export const Max = {
    glsl: 'max',
    params: [['float', 'value', 0.5, [-2,2]]]
};

export const MultiplyValue = {
    params: [['float', 'value', 0.5, [-2,2]]]
};

export const SmoothStep = {
    params: [['float', 'edge0', 0, [-2,2]], ['float', 'edge1', 1, [-2,2]]]
};

export const Posterize = {
    params: [['float', 'steps', 8, [2,32]], ['float', 'gamma', 0.6,[0,2]]]
};

export const Bias = {
    params: [['float', 'bias', 0.25, [0,1]]]
};

export const Gain = {
    params: [['float', 'gain', 0.25, [0,1]]]
};

export const Clamp = {
    params: [['float', 'from', 0, [-1,1]], ['float', 'to', 1, [-1,1]]]
};
