import {Component, Output, EventEmitter, ViewChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchBar.html',
  styleUrls: ['./app.component.css']
})

export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter();

  @ViewChild('searchBox') searchBox: ElementRef;

  ngOnInit() {
    this.searchBox.nativeElement.focus();
  }

  searchArticle(searchTerm) {
    if (searchTerm.match('https://en.wikipedia.org/wiki/')) {
      searchTerm = searchTerm.split('/')[4];
    }

    this.search.next(searchTerm);
  }
}
