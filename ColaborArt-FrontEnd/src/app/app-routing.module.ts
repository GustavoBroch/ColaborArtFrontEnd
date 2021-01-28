import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CadastrarArtistaComponent } from './cadastrar-artista/cadastrar-artista.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioCategoriaComponent } from './inicio-categoria/inicio-categoria.component';

const routes: Routes = [
  //{path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'cadastrar', component:CadastrarComponent},
  {path: 'cadastrarArtista', component:CadastrarArtistaComponent},
  {path:'home',component:HomeComponent},
  {path: 'contato', component:ContatoComponent},
  {path:'quem-somos', component:QuemSomosComponent},
  {path:'entrar', component:EntrarComponent},
  {path: 'inicio', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
