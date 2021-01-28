import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioCategoriaComponent } from './inicio-categoria/inicio-categoria.component';

const routes: Routes = [
  
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'cadastrar', component:CadastrarComponent},
  {path:'home',component:HomeComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'categoria', component:InicioCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
