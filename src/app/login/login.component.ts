import { Component, OnInit } from '@angular/core';
import construct = Reflect.construct;
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {equal} from "assert";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo: Array<any>;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  connect(login: string , password: string) {

    this.httpClient.get('http://localhost:8889/user/connect?login=' + login + '&password=' + password)
        .subscribe(User => {
          this.userInfo = User['user'];

          this.userInfo.forEach((user) => {
            if (user.session === login) {
              this.router.navigate(['home']);
            } else {
              window.alert('Erreur de connexion')
              this.router.navigate(['login']);
            }
          });
        });
  }
}
