import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const reais = parseFloat(value).toFixed(2)
    return `R$ ${reais}`;
  }

}
