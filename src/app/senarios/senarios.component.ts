import { ViewChild, Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-senarios',
  templateUrl: './senarios.component.html',
  styleUrls: ['./senarios.component.css']
})

export class SenariosComponent implements OnInit {
    crons = [
        {id: 1, value: '4 heures'},
        {id: 2, value: '8 heures'},
        {id: 3, value: '12 heures'},
        {id: 4, value: '24 heures'}];
    rangs = [
        {id: 1, value: 1}, {id: 2, value: 2}, {id: 3, value: 3},
        {id: 4, value: 4}, {id: 5, value: 5}, {id: 6, value: 6},
        {id: 7, value: 7}, {id: 8, value: 8}, {id: 9, value: 9},
        {id: 10, value: 10}, {id: 11, value: 11}, {id: 12, value: 12},
        {id: 13, value: 13}, {id: 14, value: 14}, {id: 15, value: 15},
        {id: 16, value: 16}, {id: 17, value: 17}, {id: 18, value: 18},
        {id: 19, value: 19}, {id: 20, value: 20}, {id: 21, value: 21}
    ];
    webService: any;
    rang: any;

    webserviceArray: Array<{webservice: any, rang: any}>= [];
    datas: any;
    dataWebService: any;
    url: any;
    webserv: any;
    rg: any;

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.getScenarios();
        this.getWebServices();
        console.log(this.crons);
    }

    getScenarios() {
        this.httpClient.get('http://localhost:8889/scenarios')
            .subscribe(scenarios => {
                this.datas = scenarios['scenarios'];
                // console.log(scenarios);
            });
    }

    onSelect(event: string) {
        this.router.navigate(['senarios', event]);
    }

    getWebServices() {
        this.httpClient.get('http://localhost:8889/webServices')
            .subscribe(webServices => {
                this.dataWebService = webServices['webservices'];
                console.log(webServices);
            });
    }

    addWebService(event1: string, event2: string) {
        let obj: any = {};
        obj.webService = event1;

        obj.rang = event2;
        this.webserviceArray.push(obj);
      console.log(this.webserviceArray);
  }
    addScenario( event: any, event1: any) {

        /*this.addWebService(this.webService, this.rang);*/
        console.log('je rajoute un scenario');
        this.httpClient.post('http://localhost:8889/scenario/save?name=' + event + '&cron=' + event1 , this.webserviceArray )

            .subscribe( scenario => {
                console.log(scenario);
                },
                err => {
                console.log('Erreur');
                }
            );
        this.getScenarios();
    }

}


