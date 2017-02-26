//noinspection JSUnresolvedVariable
import {default as chai} from 'chai';
import {describe} from 'mocha';

import {treeToSyntax} from '../components/glt/data/tree/treeToSyntax';

chai.should();

describe('treeToSyntax', () => {
    it('should convert to syntax', () => {
        const syntax = treeToSyntax({
            data: {
                name: 'PerlinNoise'
            }
        });
        syntax.should.have.property('data');
        syntax.data.should.have.property('name');
        syntax.data.should.have.property('proto');
    });

    it('should preserve properties', () => {
        const syntax = treeToSyntax({
            title: 'Title',
            data: {
                name: 'PerlinNoise'
            }
        });
        syntax.title.should.be.equal('Title');
    });
});
