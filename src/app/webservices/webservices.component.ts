import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-webservices',
  templateUrl: './webservices.component.html',
  styleUrls: ['./webservices.component.css']
})
export class WebservicesComponent implements OnInit {
datas: any;
  constructor(private  httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getWebServices();
  }
 getWebServices() {
    this.httpClient.get('http://localhost:8889/webServices')
        .subscribe(webServices => {
          this.datas = webServices['webservices'];
          console.log(webServices);
        });
 }
  onSelect(event: string) {
    this.router.navigate(['webServices', event]);
  }

}
