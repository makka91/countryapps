import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'searchGovForm' })
export class SearchGovForm implements PipeTransform {
  transform(countries: any, searchText: any): any {
    if (searchText == null) return countries;

    return countries.filter(function(country) {
      return country.GovernmentForm.toLowerCase().startsWith(searchText.toLowerCase());
    })
  }
}
