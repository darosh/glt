//noinspection JSUnresolvedVariable
import {default as chai} from 'chai';
import {describe} from 'mocha';

import {compile} from '../components/glt/data/compile';

chai.should();

describe('graphToTree', () => {
    it('should return histogram', () => {
        const i = {
            data: [
                ['PerlinNoise'],
                ['Abs'],
                ['Gain'],
                ['Scale', [4, 2]]
            ]
        };
        const compiled = compile(i);
    });
});
