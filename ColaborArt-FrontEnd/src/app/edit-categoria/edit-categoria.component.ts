import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {
categoria : Categoria = new Categoria

  constructor(private categoriaService : CategoriaService , private router : Router , private route : ActivatedRoute) { }

  ngOnInit() {
    if(environment.token==''){

    }
  }

}