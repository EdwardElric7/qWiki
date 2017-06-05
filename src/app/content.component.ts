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
   actualPath: String;
  constructor(){
    this.actualPath= window.location.toString().split("/")[3]+"/"+window.location.toString().split("/")[4];
    console.log(this.actualPath);
  }

   onSelect(section: number): void {
     this.selectedSection = section;
     console.log(section);

   }
}
