import {
  it,
  describe,
  expect,
  inject,
  beforeEach,
  beforeEachProviders
} from 'angular2/testing';
import {SamplePipe} from './sample.pipe';

describe('Pipe: SamplePipe', () => {
  let pipe;
  
  //setup
  beforeEachProviders(() => [
    SamplePipe
  ]);
  
  beforeEach(inject([SamplePipe], p => {
    pipe = p;
  }));
  
  //specs
  it('should make a comment', () => {
    expect(pipe.transform('Anything could be created')).toBe(`Anything could be created...then pipe it to npm...that'd be a cool pipe eh!?! :)`);
  });
}) 
