import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstudiantesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
