import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'cadastrar', component:CadastrarComponent},
  {path:'home',component:HomeComponent},
  {path: 'contato', component:ContatoComponent},
  {path:'quem-somos', component:QuemSomosComponent},
  {path:'entrar', component:EntrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
