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
    private allinfo: Array<any>;
    private alldelta: Array<any>;

    private idSelected: string;

    constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    }

   ngOnInit() {
    this.idSelected = this.route.snapshot.params['id'];

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
}
