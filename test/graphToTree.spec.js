//noinspection JSUnresolvedVariable
import {default as chai} from 'chai';
import {describe} from 'mocha';

import {graphToTree} from '../components/glt/data/graph/graphToTree';

chai.should();

describe('graphToTree', () => {
    it('should convert to tree', () => {
        const i = {
            data: [
                ['PerlinNoise'],
                ['Abs'],
                ['Gain'],
                ['Scale', [4, 2]]
            ]
        };
        graphToTree(i);
    });
    it('should convert to tree', () => {
        const graph = {
            data: [
                ['BlendScreen', {
                    data: [
                        ['PerlinNoise'],
                        ['Abs'],
                        ['Gain'],
                        ['Scale', [4, 2]]
                    ]
                }, {
                    data: [
                        ['SimplexNoise'],
                        ['Abs'],
                        ['Gain'],
                        ['Scale', [40, 20]]
                    ]
                }, 0.5],
                ['Rotate', 55]
            ]
        };
        graphToTree(graph);
    });
});
