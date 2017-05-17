import {Component, OnInit} from '@angular/core';
import { ArticleService } from './article.service';
import {Article} from './article';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})

export class AppComponent implements OnInit {
  article: Article;
  list: number[];

  constructor(private articleService: ArticleService) {
  }
  getArticle(): void {
    this.articleService.getArticle('Society').then(article => {
      console.log(JSON.stringify(article));
      this.article=article;

      console.log(article["sections"]["sectionMap"]);
      let size: number = article["sections"]["size"];
      console.log(article["sections"]["sortedSectionNumbers"]);
      interface DependData {
        [key: string]: string;
      }
      let list: Array<number> = [];
  list.length
      for (var i=0;i<article["sections"]["size"];i++){
        list.push(article["sections"]["sortedSectionNumbers"][i]);
       console.log(list[i]);


      }this.list=list;
    });

  }
  ngOnInit(): void {
    this.getArticle();
  }

}
