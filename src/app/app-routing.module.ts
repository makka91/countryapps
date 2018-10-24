import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
  {
    path: "countrylist",
    component: CountryListComponent
  },
  {
    path: "",
    redirectTo: '/countrylist',
    pathMatch: "full",
  },
  {
    path: "countrydetail/:Code",
    component: CountryDetailComponent
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
