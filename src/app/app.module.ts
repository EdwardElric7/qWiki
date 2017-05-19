import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RestangularModule} from 'ngx-restangular';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador.component';
import { ContenidoComponent } from './contenido.component';
import { SeccionesComponent } from './secciones.component';
import {resultadosBusquedaComponent} from "./resultadosBusqueda.component";

/*export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:8080/rest/api/');
  //RestangularProvider.setDefaultHeaders('Access-Control-Allow-Origin', '*');
  //RestangularProvider.setDefaultHeaders('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
}*/

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    resultadosBusquedaComponent,
    ContenidoComponent,
    SeccionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    //RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
