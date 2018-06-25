import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-senario',
  templateUrl: './senario.component.html',
  styleUrls: ['./senario.component.css']
})
export class SenarioComponent implements OnInit {
    private allinfo: Array<any>;
    private records: Array<any>;
    private idSelected: string;
    private datas: any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idSelected = this.route.snapshot.params['id'];
    this.getAllInfoScenario(this.idSelected);
  }
    getAllInfoScenario(event: string) {
        this.httpClient.get('http://localhost:8889/scenario?id=' + event)
        .subscribe(Scenario => {
                 this.allinfo = Scenario['scenario'];
                console.log(this.allinfo);
            });
    }
    testerScenario(event: string) {
     this.httpClient.get('http://localhost:8889/scenario/tester?id=' + event);
          console.log('okk' + event);
    }
    /*onSelect(event: string) {
        this.router.navigate(['webServices', event]);
    }*/
}
