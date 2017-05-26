import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-no-results',
  templateUrl: './noResults.html',
  styleUrls: ['./app.component.css']
})

export class NoResultsComponent {
  @Input() searchTerm: String;
}
