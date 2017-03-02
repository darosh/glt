import {CjsonPipe} from './cjson.pipe';

describe('CjsonPipe', () => {
  it('create an instance', () => {
    const pipe = new CjsonPipe();
    expect(pipe).toBeTruthy();
  });
});
