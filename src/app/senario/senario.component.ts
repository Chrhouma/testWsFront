import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-senario',
  templateUrl: './senario.component.html',
  styleUrls: ['./senario.component.css']
})
export class SenarioComponent implements  OnInit {
    crons = [
        {id: 1, value: '4'},
        {id: 2, value: '8'},
        {id: 3, value: '12'},
        {id: 4, value: '24'}];
    rangs = [
        {id: 1, value: 1}, {id: 2, value: 2}, {id: 3, value: 3},
        {id: 4, value: 4}, {id: 5, value: 5}, {id: 6, value: 6},
        {id: 7, value: 7}, {id: 8, value: 8}, {id: 9, value: 9},
        {id: 10, value: 10}, {id: 11, value: 11}, {id: 12, value: 12},
        {id: 13, value: 13}, {id: 14, value: 14}, {id: 15, value: 15},
        {id: 16, value: 16}, {id: 17, value: 17}, {id: 18, value: 18},
        {id: 19, value: 19}, {id: 20, value: 20}, {id: 21, value: 21}
    ];
    private dataWebService: any;
    private allinfo: Array<any>;
    private alldelta: Array<any>;
    modifier: boolean = false;
    webserviceArray: Array<{webServiceName: any , webservice: any, rang: any}>= [];


    private idSelected: string;

    constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    }

   ngOnInit() {
    this.idSelected = this.route.snapshot.params['id'];
     this.getWebServices();
    this.getAllInfoScenario(this.idSelected);
  }
    getAllInfoScenario(event: string) {
        this.httpClient.get('http://localhost:8889/scenario?id=' + event)
        .subscribe(Scenario => {
                 this.allinfo = Scenario['scenario'];
               });
    }
       testerScenario(event: string) {
        this.httpClient.get('http://localhost:8889/scenario/tester?idScenario=' + event).subscribe(() => {
            this.getAllInfoScenario(this.idSelected);
        });
    }

    public comparerScenario = ( info: any) => {
        let event1, event2, event, time1, time2;

        event = info.id ;
        info.records.forEach((record) => {

            if (record.checked) {
                if (event1) {
                    event2 = record.id;
                    time2 = record.executionTime;
                } else {
                    event1 = record.id;
                    time1 = record.executionTime;
                }
            }

        });
        console.log (time1 + '  timeee ' + time2);
        this.httpClient.get('http://localhost:8889/scenarioRecord/comparer?idScenarioRecord1=' + event1 + '&idScenarioRecord2=' + event2)
            .subscribe(Deltas => {
                this.router.navigate(['senarios/' + event + '/' + event1 + '/' + event2 + '/' + time1 + '/' + time2 ])
                this.alldelta = Deltas['deltas'];
                this.getAllInfoScenario(this.idSelected);
                 console.log(Deltas);
            });
    }
    getWebServices() {
        this.httpClient.get('http://localhost:8889/webServices')
            .subscribe(webServices => {
                this.dataWebService = webServices['webservices'];
                console.log(webServices);
            });
    }
    addWebService(event0: string , event1: string, event2: string) {
        let obj: any = {};
        obj.webServiceName = event0;
        obj.webService = event1;
        obj.rang = event2;
        this.webserviceArray.push(obj);
        console.log(this.webserviceArray);
    }
    updateScenario( event1: any , event2: any) {
        console.log('je modifie un scenario');
        this.httpClient.post('http://localhost:8889/scenario/update?id=' + this.idSelected + '&name=' + event1 + '&cron=' + event2 , this.webserviceArray )
            .subscribe( scenario => {
                // this.getScenarios();
                    this.getAllInfoScenario(this.idSelected);
                    this.rafraichir();
                },
                err => {
                    console.log('Erreur');
                }
            );

    }
    rafraichir(){
        this.webserviceArray = [];

    }
}
