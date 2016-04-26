import {
  it,
  describe,
  expect,
  async,
  inject,
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

  beforeEach(async(inject([TestComponentBuilder], tcb => {
    tcb
      .createAsync(TestComponent)
      .then(f => fixture = f);
  })));

  it('should say something about making a library', () => {
    fixture.detectChanges();
    let container = fixture.componentInstance,
      div = fixture.nativeElement.querySelector('div');
    expect(div.textContent).toBe('Make an Angular 2 Library. Go ahead. Make one :)');
  });

});

@Component({
  selector: 'test',
  directives: [App],
  template: `
  <app></app>
  `
})
class TestComponent { }
