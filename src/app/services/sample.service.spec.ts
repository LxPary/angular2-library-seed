import {
  it,
  describe,
  expect,
  async,
  inject,
  beforeEachProviders
} from 'angular2/testing';
import {SampleService} from './sample.service';

describe('SampleService', () => {

  beforeEachProviders(() => [SampleService]);

  it('should ...', async(inject([SampleService], (sampleService:SampleService) => {
    expect(sampleService.title).toBe('Angular 2 Library');
  })));

});
