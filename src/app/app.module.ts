import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Importacion del componente
import { AppComponent } from './app.component';

//Importación de los modulos
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module'


@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule,PagesModule,ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
 schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule {}
