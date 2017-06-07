import {Component, Output, EventEmitter, ViewChild, ElementRef, OnInit, Inject} from '@angular/core';
import {AutocompleteService} from './autocomplete.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchBar.html',
  styleUrls: ['./app.component.css'],
  providers: [AutocompleteService]
})

export class SearchBarComponent implements OnInit {
  autocompleteList: String[];
  searchTerm: String;

  @Output() search = new EventEmitter();

  @ViewChild('searchBox') searchBox: ElementRef;

  constructor(private autocompleteService: AutocompleteService, @Inject(DOCUMENT) private document: any) {
    console.log(this.document.location.pathname.split('/').length);
    for (let s of this.document.location.pathname.split('/')){
      console.log(s.toString());
    }
  }

  ngOnInit() {
    this.searchBox.nativeElement.focus();
    if (this.document.location.pathname.split('/').length === 3 ) {
      this.search.next(this.document.location.pathname.split('/')[2]);
    }
  }

  getAutocompleteResults(searchTerm): void {
    this.searchTerm = searchTerm;
    if (this.searchTerm === undefined) {
      this.searchTerm = '';
    }
    if (this.searchTerm !== '') {
      this.autocompleteService.getResults('auto/' + this.searchTerm.trim()).then(autocompleteList => {
        this.autocompleteList = autocompleteList;
      });
    } else {
      this.autocompleteList = [];
    }
  }

  searchArticle(searchTerm) {
    if (searchTerm.match('https://en.wikipedia.org/wiki/')) {
      searchTerm = searchTerm.split('/')[4];
    }
    this.search.next(searchTerm);
  }
}


