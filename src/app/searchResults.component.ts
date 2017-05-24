import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-search-results',
  templateUrl: './searchResults.html',
  styleUrls: ['./app.component.css']
})

export class SearchResultsComponent {
  @Input() article: Article;
  @Output() search = new EventEmitter();

  searchArticle(searchTerm) {
    this.search.next(searchTerm);
  }
}
