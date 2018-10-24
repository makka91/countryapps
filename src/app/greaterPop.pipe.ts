import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from './country';
@Pipe({ name: 'greaterPop', pure: false })
export class GreaterPopPipe implements PipeTransform {

  transform(countries: ICountry[], greaterThan: any): any {
    if (greaterThan === undefined || greaterThan == 0) return countries;
    return countries.filter(country => country.Population > greaterThan);
    
  }
}
