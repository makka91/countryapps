import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from './country';
@Pipe({ name: 'lesserPop', pure: false })
export class LesserPopPipe implements PipeTransform {

  transform(countries: ICountry[], lesserThan: any): any {
    if (lesserThan === undefined || lesserThan == 0) return countries;
    return countries.filter(country => country.Population < lesserThan);
    
  }
}
