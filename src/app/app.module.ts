import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestangularModule} from 'ngx-restangular';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador.component';
import { DesambiguacionComponent } from './desambiguacion.component';
import { ContenidoComponent } from './contenido.component';
import { SeccionesComponent } from './secciones.component';

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:8080/rest/api/');
  //RestangularProvider.setDefaultHeaders('Access-Control-Allow-Origin', '*');
  //RestangularProvider.setDefaultHeaders('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
}

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
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
