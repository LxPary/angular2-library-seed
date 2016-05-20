import {
  it,
  describe,
  expect,
  async,
  inject,
  beforeEach,
  beforeEachProviders
} from '@angular/core/testing';
import {SamplePipe} from './sample.pipe';

describe('Pipe: SamplePipe', () => {
  let pipe;
  
  //setup
  beforeEachProviders(() => [
    SamplePipe
  ]);
  
  beforeEach(async(inject([SamplePipe], p => {
    pipe = p;
  })));
  
  //specs
  it('should make a comment', () => {
    expect(pipe.transform('Anything could be created')).toBe(`Anything could be created...then pipe it to npm...that'd be a cool pipe eh!?! :)`);
  });
}) 
