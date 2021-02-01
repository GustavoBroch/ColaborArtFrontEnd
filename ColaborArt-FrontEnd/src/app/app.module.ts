import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { InicioCategoriaComponent } from './inicio-categoria/inicio-categoria.component'
import { CategoriaComponent } from './categoria/categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { ApagarCategoriaComponent } from './apagar-categoria/apagar-categoria.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CadastrarComponent,
    InicioComponent,
    InicioCategoriaComponent,
    CategoriaComponent,
    EditCategoriaComponent,
    ApagarCategoriaComponent,
    AlertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
