import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.html',
  styleUrls: ['./app.component.css']
})

export class ContenidoComponent implements OnInit, OnChanges {
  visible = true;
  @Input() article: Article;
  @Input() list: number[];
  selectedSection: number;

  contentList: Array<String> = new Array <String>();


  onSelect(section: number): void {
    this.selectedSection = section;
    console.log(section);

  }


  ngOnInit(): void {


  }

  ngOnChanges(): void {
    for (let i = 0; i < this.list.length; i++) {
      this.contentList[i] = this.article["sections"]["sectionMap"][this.list[i]]["content"]
    }

  }
}
