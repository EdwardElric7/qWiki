import {Component, Input} from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-content',
  templateUrl: './content.html',
  styleUrls: ['./app.component.css']
})

export class ContentComponent {
  @Input() article: Article;
  selectedSection: number;
  actualPath: String = '';
  constructor() {
    if (window.location.toString().match('wiki')) {
      this.actualPath = window.location.toString().split('/')[3] + '/' + window.location.toString().split('/')[4];
    }
    console.log('path = ' + this.actualPath);
  }

   onSelect(section: number): void {
     this.selectedSection = section;
     console.log(section);

   }
}
