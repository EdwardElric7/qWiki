import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './searchBar.component';
import { ContentComponent } from './content.component';
import {SearchResultsComponent} from './searchResults.component';
import {NoResultsComponent} from './noResults.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ContentComponent,
    SearchResultsComponent,
    NoResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'app.component',
        component: AppComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
