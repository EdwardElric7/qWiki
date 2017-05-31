import {Component, Output, EventEmitter, ViewChild, ElementRef, OnInit, Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Headers, Http} from "@angular/http";

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchBar.html',
  styleUrls: ['./app.component.css']
})

export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter();

  @ViewChild('searchBox') searchBox: ElementRef;

  auto: Auto = new Auto();
  searchTerm: string;


  constructor(private autoService: AutoService){}

  ngOnInit() {
    this.searchBox.nativeElement.focus();
  }

  searchArticle(searchTerm) {
    if (searchTerm.match('https://en.wikipedia.org/wiki/')) {
      searchTerm = searchTerm.split('/')[4];
    }

    this.search.next(searchTerm)
  }

  searchAuto(searchTerm) {
    this.searchTerm = searchTerm;
    this.autoService.getAuto('auto/' + this.searchTerm).then(auto => {
      this.auto = auto;
      console.log(JSON.stringify(this.auto));
    });
  }
}

class Auto{}

@Injectable()
class AutoService{
  private headers = new Headers({'Content-Type': 'application/json'});
  private articleUrl = 'http://localhost:8080';


  constructor(private http: Http) {
  }
  getAuto(search: String): Promise<Auto> {
    const url = `${this.articleUrl}/${search}`;
    return this.http.get(url).toPromise().then(response => response.json() as Auto)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
