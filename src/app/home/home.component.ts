import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas: any;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAutomaticTest();
  }


  getAutomaticTest() {
    this.httpClient.get('http://localhost:8889/home')
        .subscribe(tests => {
          this.datas = tests['tests'];
          console.log(tests);
        });
    }

}
