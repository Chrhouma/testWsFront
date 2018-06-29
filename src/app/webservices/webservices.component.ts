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
datainfo: any;
  constructor(private  httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getWebServices();

  }
    getWebServices() {
    this.httpClient.get('http://localhost:8889/webServices')
        .subscribe(webServices => {
           this.datas = webServices['webservices'];
          console.log(webServices);
        },
            error => {

            },
            () => {
                this.getinfo();
            });
 }
  onSelect(event: string) {
    this.router.navigate(['webServices', event]);
  }
  getinfo() {
     this.httpClient.get('http://localhost:8889/webServices/info')
         .subscribe(info => {
             this.datainfo = info['infogenerale'];
             console.log(info);
         });
  }

}
