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
    methodes = [
        {id: 1, name: 'Get'},
        {id: 2, name: 'Post'}
    ];
    slectedMethode = null;

    constructor(private  httpClient: HttpClient, private router: Router) {
    }

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

    addWebService(name: string, url: string, slectedMethode: string, body:  string, description: string, inputschema: string,
                  inputSchemapath: string, outputSchema: string, outputSchemapath: string) {

        this.httpClient.post('http://localhost:8889/webService/add?name=' + name + '&url=' + url +
            '&description=' + description + '&methode=' + slectedMethode, body , '&inputSchemaName=' + inputschema +
            '&inputSchemapath=' + inputSchemapath + '&outputSchemaName=' + outputSchema +
            '&outputSchemapath=' + outputSchemapath)
            .subscribe(() => {
                    this.getWebServices();
             },
                err => {
                    console.log('error');
                });
    }
       delteWebservice(id: string) {
        this.httpClient.delete('http://localhost:8889/webServices/delete?idWebservice=' + id )

        .subscribe(() => {
            this.getWebServices();
            console.log('ok');
            },
             err => {
            console.log('error to delete web service');
                 this.getWebServices();

        });
    }
}

