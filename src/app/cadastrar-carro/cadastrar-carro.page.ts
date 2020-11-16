import { CarroService } from 'src/services/CarroService';
import { Carro } from 'src/models/Carro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.page.html',
  styleUrls: ['./cadastrar-carro.page.scss'],
})
export class CadastrarCarroPage implements OnInit {

  public carro: Carro = new Carro()
  constructor( 
    public _carrosService: CarroService,
    private _router: Router,
     ) {
    
   }

  ngOnInit() {}

  cadastrarCarro(){
    this._carrosService.cadastrar(this.carro).subscribe(res => {
      console.log(res);
      this._router.navigate(['/lista-carros'])
    })  
  }

}
