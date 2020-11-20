import { CarroService } from 'src/services/CarroService';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Carro } from 'src/models/Carro';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.page.html',
  styleUrls: ['./lista-carros.page.scss'],
})
export class ListaCarrosPage implements OnInit, OnDestroy {

  public carros: Carro[] = new Array<Carro>()

  constructor(
    private _route: Router,
    private _carroService: CarroService,
  ) { 
  }
  
  ngOnDestroy(): void {
    console.log('A página limpou a lista d Carros!');
    this.carros = [];
  }
  
  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.obterCarros();
  }

  async obterCarros() {
    const listaCarros = await this._carroService.listar();
    this.carros = listaCarros;
    console.log(this.carros)
  }

cadastrarCarro(){
  this._route.navigate(['/cadastrar-carro'])
}

visualizarCarro(carro_id: Number) {
  this._route.navigate([`/carro/${carro_id}`]);
}

}
