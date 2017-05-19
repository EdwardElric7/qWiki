import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ResultadosBusqueda } from './resultadosBusqueda';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResultadosBusquedaService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private articleUrl = 'http://localhost:8080/rest/api';

  constructor(private http: Http) {
  }
  getSearch(search: String): Promise<ResultadosBusqueda> {
    const url = `${this.articleUrl}/${search}`;
    return this.http.get(url).toPromise().then(response => response.json() as ResultadosBusqueda)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
