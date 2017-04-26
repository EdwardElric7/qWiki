import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador.component';
import { DesambiguacionComponent } from './desambiguacion.component';
import { ContenidoComponent } from './contenido.component';
import { SeccionesComponent } from './secciones.component';
import {ArticleService} from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    DesambiguacionComponent,
    ContenidoComponent,
    SeccionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
