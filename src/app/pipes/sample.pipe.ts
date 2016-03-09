import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'sample'
})
export class SamplePipe implements PipeTransform {
  transform(value) {
    return `${value}...then pipe it to npm...that'd be a cool pipe eh!?! :)`;
  }
}
