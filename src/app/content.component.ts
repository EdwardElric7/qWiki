import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-content',
  templateUrl: './content.html',
  styleUrls: ['./app.component.css']
})

export class ContentComponent {
   @Input() article: Article;
//   @Input() list: number[];
//   size: number = this.article['sections']['size'];
   selectedSection: number;
//
//   contentList: Array<String> = new Array <String>();
//
//
//
//
// //   interface DependData {
// //   [key: string]: string;
// // }
// // let list: Array<number> = [];
// //
// // for (let i = 0; i < size; i++) {
// //   list.push(this.article['sections']['sortedSectionNumbers'][i]);
// // }
// // this.list = list;
//
//
   onSelect(section: number): void {
     this.selectedSection = section;
     console.log(section);

   }
//
//   ngOnChanges(): void {
//     for (let i = 0; i < this.list.length; i++) {
//       this.contentList[i] = this.article['sections']['sectionMap'][this.list[i]]['displayedContent'];
//     }
//
//   }
}
