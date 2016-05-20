import {
  it,
  describe,
  expect,
  async,
  inject,
  beforeEach,
  beforeEachProviders
} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';

import {AppComponent} from './app.component';

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
  directives: [AppComponent],
  template: `
  <app></app>
  `
})
class TestComponent { }
