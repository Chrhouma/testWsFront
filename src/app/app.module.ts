import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SenariosComponent,
    SenarioComponent,
    WebservicesComponent,
    WebserviceComponent
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
