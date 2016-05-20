import {Component} from '@angular/core';

@Component({
  selector: 'sample',
  template: `
  <div class="sample">{{sample}}</div>
  `,
  styles: [require('./sample.component.scss')]
})
export class SampleComponent {
  public sample: string = 'Make an Angular 2 Library. Go ahead. Make one :)';
}
