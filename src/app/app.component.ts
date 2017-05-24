import {Component} from '@angular/core';
import { ArticleService } from './article.service';
import {Article} from './article';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})

export class AppComponent {
  article: Article =  new Article();
  searchTerm: String;

  constructor(private articleService: ArticleService) {
  }
  getArticle(searchTerm): void {
    this.searchTerm = searchTerm;
    this.articleService.getArticle(this.searchTerm).then(article => {
      console.log(JSON.stringify(article));
      this.article = article;
      const firstParam = JSON.stringify(this.article).split('"')[1];
      console.log(firstParam);
      if (firstParam === 'title') {
        this.article.type = 2;
      } else if (firstParam === 'results' && this.article['size'] !== 0) {
        this.article.type = 3;
      } else {
        this.article.type = 1;
      }
    });
  }

}
