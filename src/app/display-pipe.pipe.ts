import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayPipe'
})
export class DisplayPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
