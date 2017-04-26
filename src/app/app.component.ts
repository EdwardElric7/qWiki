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
  constructor(private articleService: ArticleService) {
  }
  getArticle(): void {
    this.articleService.getArticle('Society').then(article => {
      console.log(JSON.stringify(article));
    });
  }
  ngOnInit(): void {
    this.getArticle();
  }
}
