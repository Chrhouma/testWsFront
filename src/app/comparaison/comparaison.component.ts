import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})
export class ComparaisonComponent implements OnInit {

  private allinfo: Array<any>;
  private alldelta: Array<any>;
  private idSelected: string;
  private idSelectedRecord1: string;
  private idSelectedRecord2: string;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.idSelected = this.route.snapshot.params['id'];
    this.idSelectedRecord1 = this.route.snapshot.params['idRecord1'];
    this.idSelectedRecord2 = this.route.snapshot.params['idRecord2'];
    this.comparerScenario( this.idSelectedRecord1, this.idSelectedRecord2);
  }

  getAllInfoScenario(event: string) {
    this.httpClient.get('http://localhost:8889/scenario?id=' + event)
        .subscribe(Scenario => {
          this.allinfo = Scenario['scenario'];
        });
  }

  comparerScenario( event1: string, event2: string) {
    this.httpClient.get('http://localhost:8889/scenarioRecord/comparer?idScenarioRecord1=' + event1 + '&idScenarioRecord2=' + event2)
        .subscribe(Deltas => {
      this.alldelta = Deltas['deltas'];
      this.getAllInfoScenario(this.idSelected);
console.log(event1);
console.log(event2);
console.log(Deltas);
    });
  }
  onSelect(event: string, event1: string, event2: string) {
    this.router.navigate(['senarios', event, '/', event1, '/', event2]);
  }
}
