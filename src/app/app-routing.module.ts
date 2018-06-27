/**
 * Created by front-vendeur on 22/06/18.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SenariosComponent } from './senarios/senarios.component';
import { SenarioComponent } from './senario/senario.component';
import { WebservicesComponent } from './webservices/webservices.component';
import { WebserviceComponent } from './webservice/webservice.component';
import { ComparaisonComponent } from './comparaison/comparaison.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'senarios',
        component: SenariosComponent,

    },
    {
        path: 'senarios/:id',
        component: SenarioComponent
    },
    {
        path: 'senarios/:id/:idRecord1/:idRecord2',
        component: ComparaisonComponent
    },
    {
        path: 'webServices',
        component: WebservicesComponent
    },
    {
        path: 'webServices/:id',
        component: WebserviceComponent
    },
   ];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

