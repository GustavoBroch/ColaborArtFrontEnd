import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { InicioCategoriaComponent } from './inicio-categoria/inicio-categoria.component'
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { ApagarCategoriaComponent } from './apagar-categoria/apagar-categoria.component';
import { AlertasComponent } from './alertas/alertas.component';
import { from } from 'rxjs';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { ApagarProdutoComponent } from './apagar-produto/apagar-produto.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntrarComponent } from './entrar/entrar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CadastrarComponent,
    InicioComponent,
    InicioCategoriaComponent,
    EditCategoriaComponent,
    ApagarCategoriaComponent,
    AlertasComponent,
    EditProdutoComponent,
    ApagarProdutoComponent,
    UserEditComponent,
    CarrinhoComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide:LocationStrategy,
    useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
