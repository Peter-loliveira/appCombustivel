import { CarroService } from 'src/services/CarroService';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/models/Carro';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.page.html',
  styleUrls: ['./lista-carros.page.scss'],
})
export class ListaCarrosPage implements OnInit {

  public carros: Carro[] = new Array<Carro>()

  constructor(
    private _route: Router,
    private _carroService: CarroService,

  ) { 
    this.obterCarros();
  }

  ngOnInit() {
  }

  async obterCarros() {
    const listaCarros = await this._carroService.listar();
    this.carros = listaCarros;
    console.log(this.carros)
  }

cadastrarCarro(){
  this._route.navigate(['/cadastrar-carro'])
}

}
