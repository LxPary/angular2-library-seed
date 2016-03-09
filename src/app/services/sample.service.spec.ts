import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from 'angular2/testing';
import {SampleService} from './sample.service';

describe('SampleService', () => {

  beforeEachProviders(() => [SampleService]);

  it('should ...', inject([SampleService], (sampleService:SampleService) => {
    expect(sampleService.title).toBe('Angular 2 Library');
  }));

});
