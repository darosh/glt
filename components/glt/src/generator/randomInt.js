import {default as randomUniform} from 'd3-random/src/uniform';

export function randomInt(min, max) {
    return Math.floor(randomUniform(min, max)());
}
