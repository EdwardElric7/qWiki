import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchBar.html',
  styleUrls: ['./app.component.css']
})

export class SearchBarComponent {
  @Output() search = new EventEmitter();

  searchArticle(searchTerm) {
    if (searchTerm === 'https://en.wikipedia.org/wiki/Queen') {
      searchTerm = searchTerm.split('/')[4];
    }

    this.search.next(searchTerm);
  }
}
