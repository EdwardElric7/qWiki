import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-content',
  templateUrl: './content.html',
  styleUrls: ['./app.component.css']
})

export class ContentComponent {
   @Input() article: Article;
   selectedSection: number;

   onSelect(section: number): void {
     this.selectedSection = section;
     console.log(section);

   }
}
