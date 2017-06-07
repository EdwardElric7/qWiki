import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AutocompleteService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private articleUrl = 'http://localhost:8080';

  constructor(private http: Http) {
  }
  getResults(search: String): Promise<String[]> {
    const url = `${this.articleUrl}/${search}`;
    return this.http.get(url).toPromise().then(response => response.json() as String[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
