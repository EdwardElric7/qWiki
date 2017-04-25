import {Component, OnInit} from '@angular/core';
import { Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  article;
  articulo;
  search: String;
  constructor(private restangular: Restangular) {
  }
  ngOnInit() {
    this.article = this.restangular.one('potato').get();
    alert(this.article);
  }
}
