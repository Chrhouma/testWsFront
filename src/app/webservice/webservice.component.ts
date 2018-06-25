import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.component.html',
  styleUrls: ['./webservice.component.css']
})
export class WebserviceComponent implements OnInit {
  private idSelected: string;
  private allinfo: Array<any>;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.idSelected = this.route.snapshot.params['id'];
    this.getAllInfoWebService(this.idSelected);
  }
  getAllInfoWebService(event: string) {
    this.httpClient.get('http://localhost:8889/webService?id=' + event)
        .subscribe(webService => {
          this.allinfo = webService['webService'];
          console.log(webService);
        });
  }
  onSelect(event: string) {
    this.router.navigate(['senarios', event]);
  }
}
