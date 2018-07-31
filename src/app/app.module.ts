import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Pipe, PipeTransform, ViewContainerRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SenariosComponent } from './senarios/senarios.component';
import {AppRoutingModule} from './app-routing.module';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { SenarioComponent } from './senario/senario.component';
import { WebservicesComponent } from './webservices/webservices.component';
import { WebserviceComponent } from './webservice/webservice.component';
import { ComparaisonComponent } from './comparaison/comparaison.component';
import { SortByPipe} from './pipes/SortByPipe';
import { SortByDate} from './pipes/SortByDate';
import { SortByName} from './pipes/SortByName';
import { ComparaisonWebserviceComponent } from './comparaison-webservice/comparaison-webservice.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SenariosComponent,
    SenarioComponent,
    WebservicesComponent,
    WebserviceComponent,
    ComparaisonComponent,
    SortByPipe,
    SortByDate,
    SortByName,
    ComparaisonWebserviceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
