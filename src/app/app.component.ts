import {Component, OnInit, Injectable} from '@angular/core';
import { Restangular } from 'ngx-restangular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {stringify} from "@angular/core/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  article;
  search: String;
  constructor(private http: Http) {
  }
  ngOnInit() {
    console.log(JSON.stringify(this.http.request('http://localhost:8080/rest/api/mass/').map(res => res.json())));
    //this.article = this.restangular.all('potato').get();
    //alert(this.article);
  }
}
