import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-senario',
  templateUrl: './senario.component.html',
  styleUrls: ['./senario.component.css']
})
export class SenarioComponent implements OnInit {

  private allinfo: Array<any>;
  private idSelected: string;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.getAllInfoScenario(this.idSelected);
  }
  getAllInfoScenario(event: string) {
    this.httpClient.get('http://localhost:8889//scenario?id=' + event)
        .subscribe( infos => {
          this.allinfo = infos['scenario'];
        });
  }
}
