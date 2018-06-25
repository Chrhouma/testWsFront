/**
 * Created by front-vendeur on 22/06/18.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule, } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SenariosComponent } from './senarios/senarios.component';
import { SenarioComponent } from './senario/senario.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'senarios',
        component: SenariosComponent
    },
    {
        path: 'scenario',
        component: SenarioComponent
    }
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
