import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryService } from './country.service';
import { OrderByPipe } from './orderBy.pipe';
import { SearchPipe } from './search.pipe';
import { SearchGovForm } from './searchGovForm.pipe';
import { GreaterPopPipe } from './greaterPop.pipe';
import { LesserPopPipe } from './lesserPop.pipe'


@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent,
    OrderByPipe,
    SearchPipe,
    SearchGovForm,
    GreaterPopPipe,
    LesserPopPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
