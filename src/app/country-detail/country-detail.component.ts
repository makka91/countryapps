import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICountry, CountryLanguage } from '../country';
import { City, World } from '../country';



@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {


  public country: ICountry;
  public cities: City[];
  public capital: City;
  public langs: string;


  constructor(private countryService: CountryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let countryID = this.route.snapshot.paramMap.get('Code');
    this.countryService.getWorld().subscribe((world: any) => {
      this.country = world.Country.filter((country: ICountry) => country.Code == countryID)[0];
      
      this.capital = world.City.filter((city: City) => this.country.Capital == city.ID)[0];

      this.cities = world.City.filter((city: City) => city.CountryCode == countryID);

      let langs = world.CountryLanguage.filter((lang: CountryLanguage) => lang.CountryCode == countryID)

      this.langs = langs.map((lang: CountryLanguage) => lang.Language).join(", ");
    })

  }

  goBack() {
    this.router.navigate(['/countrylist']);
  }

}
