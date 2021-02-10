import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioCategoriaComponent } from './inicio-categoria/inicio-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { ApagarCategoriaComponent } from './apagar-categoria/apagar-categoria.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { ApagarProdutoComponent } from './apagar-produto/apagar-produto.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},

  {path:'home',component:HomeComponent},
  {path: 'cadastrar', component:CadastrarComponent},

  {path: 'inicio', component:InicioComponent},
  {path: 'categoria', component:InicioCategoriaComponent},

  {path: 'edit-categoria/:id', component:EditCategoriaComponent},
  {path: 'apagar-categoria/:id', component:ApagarCategoriaComponent},
  {path: 'edit-produto/:id', component:EditProdutoComponent},
  {path: 'apagar-produto/:id', component:ApagarProdutoComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'carrinho/:id', component: CarrinhoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
