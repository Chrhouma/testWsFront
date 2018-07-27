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
  private alldelta: Array<any>;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

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

  public comparaison() {
    console.log('yess');
  }

  public comparewebservice = (info: any) => {
     let event, event1, event2, time1, time2;

     event = info.id ;
     info.records.forEach((record) => {

     if (record.checked) {
     if (event1) {
     event2 = record.id;
     time2 = record.date;
     } else {
     event1 = record.id;
     time1 = record.date;
     }
     }
    });

     this.httpClient.get('http://localhost:8889/serviceRecord/comparer?idServiceRecord1=' + event1 + '&idServiceRecord2=' + event2)
     .subscribe(Deltas => {
     this.router.navigate(['webServices/' + event + '/' + event1 + '/' + event2 + '/' + time1 + '/' + time2])
     this.alldelta = Deltas['deltas'];
     this.getAllInfoWebService(this.idSelected);
     console.log(Deltas);
     });
    console.log('yessss');
  }
}
