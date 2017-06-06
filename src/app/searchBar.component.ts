import {Component, Output, EventEmitter, ViewChild, ElementRef, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchBar.html',
  styleUrls: ['./app.component.css']
})

export class SearchBarComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: any) {
    console.log(this.document.location.pathname.split('/').length);
    for (let s of this.document.location.pathname.split('/')){
      console.log(s.toString());
    }
  }


  @Output() search = new EventEmitter();

  @ViewChild('searchBox') searchBox: ElementRef;

  ngOnInit() {
    this.searchBox.nativeElement.focus();
    if(this.document.location.pathname.split("/").length ==3 ){
      this.search.next(this.document.location.pathname.split("/")[2]);
    }
  }

  searchArticle(searchTerm) {
    if (searchTerm.match('https://en.wikipedia.org/wiki/')) {
      searchTerm = searchTerm.split('/')[4];
    }
    this.search.next(searchTerm);
  }


s
}


