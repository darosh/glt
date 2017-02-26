import {default as chai} from 'chai';
import {graphToTree} from '../components/glt/data/graph/graphToTree';
import {default as str} from 'json-stringify-pretty-compact';

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
        const i = {
            data: [
                ['Screen', {
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
        console.log(str(i));
        const tree = graphToTree(i);
        console.log(str(tree));
    });
});
