import {Component} from '@angular/core';

import '../style/app.scss';

import {SampleComponent} from './components/sample.component';
import {SampleDirective} from './directives/sample.directive';
import {SamplePipe} from './pipes/sample.pipe';
import {SampleService} from './services/sample.service';

/*
 * Library Demo
 */
@Component({
  selector: 'app',
  providers: [SampleService],
  directives: [SampleComponent, SampleDirective],
  pipes: [SamplePipe],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})
export class AppComponent {
  pipeTest: string = 'Create an amazing community by contributing a library';
  url: string = 'https://github.com/preboot/angular2-library-seed';

  constructor(public sampleService: SampleService) {
  }
}
