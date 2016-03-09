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

import {App} from './app';

describe('App', () => {
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
  directives: [App],
  template: `
  <app></app>
  `
})
class TestComponent {}
