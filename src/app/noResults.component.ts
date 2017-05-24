import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-no-results',
  templateUrl: './noResults.html',
  styleUrls: ['./app.component.css']
})

export class NoResultsComponent {
  @Input() searchTerm: String;
}
