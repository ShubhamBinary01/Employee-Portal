import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UpperCasePipe'
})
export class UpperCasePipePipe implements PipeTransform {

  transform(value: any): any {
    return value.toUpperCase();
  }

}
