import {Component} from 'angular2/core';

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
  styles: [require('./app.scss')],
  template: require('./app.html')
})
export class App {
  pipeTest: string = 'Create an amazing community by contributing a library';
  url: string = 'https://github.com/preboot/angular2-library-seed';

  constructor(public sampleService: SampleService) {
  }
}
