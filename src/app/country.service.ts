import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City, ICountry, World, CountryLanguage } from './country';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getWorld(): Observable<any> {
    return this.http.get('/assets/data/world.json') as Observable<any>;
  }

}

