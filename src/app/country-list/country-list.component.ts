import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';

import { ICountry } from '../country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {


  isDesc: boolean = false;
  column: string = 'Name';
  direction: number;

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  public countries: Array<ICountry> = [];
  public displaycountry: Array<ICountry> = [];

  constructor(private _countryService: CountryService, private router: Router) { }

  ngOnInit() {
    this._countryService.getWorld().subscribe((data: any) => this.countries = data.Country);
  
    this.displaycountry = this.countries.filter((element: ICountry) => element.Continent == "");

  }

  onChange(value: string) {
    this.displaycountry = this.countries.filter((element: ICountry) => element.Continent == value)

  }
}
