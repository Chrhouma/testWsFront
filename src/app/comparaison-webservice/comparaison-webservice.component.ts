import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-comparaison-webservice',
  templateUrl: './comparaison-webservice.component.html',
  styleUrls: ['./comparaison-webservice.component.css']
})
export class ComparaisonWebserviceComponent implements OnInit {
  private info: any
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

    this.comparerWebservice(this.idSelectedRecord1, this.idSelectedRecord2);
  }

  getAllInfoWebService(event: string) {
    this.httpClient.get('http://localhost:8889/webService?id=' + event)
        .subscribe(webService => {
          this.allinfo = webService['webService'];
          console.log(webService);
        });
  }

  comparerWebservice(event1: string, event2: string) {
    this.httpClient.get('http://localhost:8889/serviceRecord/comparer?idServiceRecord1=' + event1 + '&idServiceRecord2=' + event2)
        .subscribe(Deltas => {
          this.alldelta = Deltas['deltas'];
          this.getAllInfoWebService(this.idSelected);

        });
  }

  onSelect(event: string, event1: string, event2: string) {
    this.router.navigate(['webServices', event, '/', event1, '/', event2]);
  }
}

