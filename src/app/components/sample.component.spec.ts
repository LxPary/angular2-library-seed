import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEach,
  beforeEachProviders
} from 'angular2/testing';
import {Component} from 'angular2/core';

import {SampleComponent} from './sample.component';

describe('SampleComponent', () => {
  let fixture;
  
  //setup
  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    return tcb
      .createAsync(TestComponent)
      .then(f => fixture = f);
  }));

  it('should say something about making a library', () => {
    let container = fixture.componentInstance,
      div = fixture.nativeElement.querySelector('div');
    expect(div.textContent).toBe('');
  });

});

@Component({
  selector: 'test',
  directives: [SampleComponent],
  template: `
  <sample></sample>
  `
})
class TestComponent {}
