import {default as chai} from 'chai';
import {compositionToTree} from '../components/glt/src/data/composition/compositionToTree';

chai.should();

describe('compositionToTree', () => {
    it('should convert to tree', () => {
        const tree = compositionToTree({
            data: [
                {generator: 'PerlinNoise'}
            ]
        });
        tree.should.have.property('data');
        tree.data.should.be.a('object');
        tree.data.name.should.be.equal('PerlinNoise');
    });

    it('should preserve properties', () => {
        const tree = compositionToTree({
            title: 'Title',
            data: [
                {generator: 'PerlinNoise'}
            ]
        });
        tree.title.should.be.equal('Title');
    });
});
