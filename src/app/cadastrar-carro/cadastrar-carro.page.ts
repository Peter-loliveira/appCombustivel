import { CarroService } from 'src/services/CarroService';
import { Carro } from 'src/models/Carro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.page.html',
  styleUrls: ['./cadastrar-carro.page.scss'],
})
export class CadastrarCarroPage implements OnInit {

  public carro: Carro = new Carro()
  constructor( public _carrosService: CarroService ) {
    
   }

  ngOnInit() {}

  cadastrarCarro(){
    this._carrosService.cadastrar(this.carro).subscribe(res => {
      console.log(res);
      
    })  
  }

}
