import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-senarios',
  templateUrl: './senarios.component.html',
  styleUrls: ['./senarios.component.css']
})
export class SenariosComponent implements OnInit {
  datas: any;
  url: any;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getScenarios();
  }
getScenarios() {
    this.httpClient.get('http://localhost:8889/scenarios')
        .subscribe(scenarios => {
          this.datas = scenarios['scenarios'];
        // console.log(scenarios);
        });
}

    onSelect(event: string) {

       /*this.router.navigate( id);*/
       // this.router.navigateByUrl('/senario/' + id);
        this.router.navigate(['senarios', event]);
       //console.log('iciiiii' + event);
    }
}
