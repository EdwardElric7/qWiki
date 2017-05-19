import {Component, OnInit} from '@angular/core';
import { ArticleService } from './article.service';
import { ResultadosBusquedaService } from './resultadosBusqueda.service';
import {Article} from './article';
import 'rxjs/add/operator/toPromise';
import {ResultadosBusqueda} from "./resultadosBusqueda";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService, ResultadosBusquedaService]
})

export class AppComponent implements OnInit {
  article: Article;
  search: ResultadosBusqueda;
  list: number[];
  listLink: string[];
  listTitle: string[];

  constructor(private articleService: ArticleService, private resultadosService: ResultadosBusquedaService) {
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

  getSearch(): void {
    this.resultadosService.getSearch('Queen').then(search => {
      this.search = search;



      let listTitle: Array<string> = [];
      let listLink: Array<string> = [];

      const size: number = search["size"];

      if(size == 0){
        search.isEmpty = true;
      } else{

        for (var i = 0; i < size; i++) {
          listTitle.push(search["results"][i]["title" ]);
          listLink.push(search["results"][i]["link"]);
        }

      }this.listLink  = listLink;
       this.listTitle = listTitle;

    });

  }

  ngOnInit(): void {
    this.getSearch();
  }

}
