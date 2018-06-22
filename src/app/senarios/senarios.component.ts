import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-senarios',
  templateUrl: './senarios.component.html',
  styleUrls: ['./senarios.component.css']
})
export class SenariosComponent implements OnInit {
  datas: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getScenarios();
  }
getScenarios() {
    this.httpClient.get('http://localhost:8889/scenarios')
        .subscribe(scenarios => {
          this.datas = scenarios['scenarios'];
          console.log(scenarios);
        });
}
}
