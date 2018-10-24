import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(countries: any, searchText: any): any {
    if (searchText == null) return countries;

    return countries.filter(function(country) {
      return country.Name.toLowerCase().startsWith(searchText.toLowerCase());
    })
  }
}
