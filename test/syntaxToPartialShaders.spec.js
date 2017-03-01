//noinspection JSUnresolvedVariable
import {default as chai} from 'chai';
import {describe} from 'mocha';

import {graphToTree} from '../components/glt/data/graph/graphToTree';
import {addIds} from '../components/glt/data/graph/addIds';
import {deep} from '../components/glt/utils/deep';
import {treeToSyntax} from '../components/glt/data/tree/treeToSyntax';
import {syntaxToPartialShaders} from '../components/glt/data/syntax/syntaxToPartialShaders';

chai.should();

describe('syntaxToPartialShaders', () => {
    it('should generate partial shaders', () => {
        const graph = {
            data: [
                ['PerlinNoise'],
                ['Abs'],
                ['Gain'],
                ['Scale', [4, 2]]
            ]
        };
        let ids = addIds(graph);
        let tree = {data: graphToTree(graph)};
        let syntax = treeToSyntax(deep(tree));
        let partials = syntaxToPartialShaders(syntax);
        partials.length.should.be.equal(3);
    });
});
