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

import {SampleDirective} from './sample.directive';

describe('SampleDirective', () => {
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

  it('should add a class', () => {
    fixture.detectChanges();
    let container = fixture.componentInstance,
      div = fixture.nativeElement.querySelector('div');
    expect(div.getAttribute('class')).toBe('sample-class');
  });
});

@Component({
  selector: 'test',
  directives: [SampleDirective],
  template: `
  <div sample></div>
  `
})
class TestComponent { }
