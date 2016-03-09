// for standard export at bottom
import {SampleComponent} from './src/app/components/sample.component';
import {SampleDirective} from './src/app/directives/sample.directive';
import {SamplePipe} from './src/app/pipes/sample.pipe';
import {SampleService} from './src/app/services/sample.service';

// for manual imports
export * from './src/app/components/sample.component';
export * from './src/app/directives/sample.directive';
export * from './src/app/pipes/sample.pipe';
export * from './src/app/services/sample.service';

// provides standard for consumption via things like angular-cli
export default {
  directives: [SampleComponent, SampleDirective],
  pipes: [SamplePipe],
  providers: [SampleService]
}
