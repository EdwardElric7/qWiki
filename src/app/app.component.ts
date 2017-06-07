import {Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ArticleService} from './article.service';
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

  constructor(private articleService: ArticleService, private titleService: Title ) {
  }
  getArticle(searchTerm): void {
    this.searchTerm = searchTerm;
    this.articleService.getArticle('wiki/' + this.searchTerm.trim()).then(article => {
      this.article = article;
      const firstParam = JSON.stringify(this.article).split('"')[1];
      if (firstParam === 'title') {
        this.article.type = 2;
        this.setTitle(this.article['title'] + ' - qWiki');
      } else if (firstParam === 'results' && this.article['size'] !== 0) {
        this.articleService.getArticle('info/' + this.searchTerm).then(info => {
          if (info['disambiguation']) {
            this.article.type = 3;
            this.setTitle(this.article['results'][0]['title'] + ' - qWiki');
          } else {
            this.article.type = 4;
            this.setTitle(searchTerm + ' - qWiki');
          }
        });
      } else {
        this.article.type = 1;
        this.setTitle(searchTerm + ' - qWiki');
      }
    });
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
