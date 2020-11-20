import { Component, OnDestroy, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
// import { parse } from 'path';
import { Carro } from "src/models/Carro";
import { CarroService } from "src/services/CarroService";

@Component({
  selector: "app-calcular-litros",
  templateUrl: "./calcular-litros.page.html",
  styleUrls: ["./calcular-litros.page.scss"],
})
export class CalcularLitrosPage implements OnInit, OnDestroy {
  public distancia: number = 0;
  public combustivel: string = "1";
  public carro_id: number;
  public carros: Carro[] = new Array<Carro>();
  public carro: Carro = new Carro();
  public quantidadeLitros: number = 0;

  constructor(
    private _carroService: CarroService,
    private _alert: AlertController
  ) {}


  ngOnDestroy(): void {
  }
  
  ngOnInit() {}
  
  ionViewDidEnter() {
    this.buscarCarros();
  }
  
  ionViewDidLeave() {
    
    this.carros = [];
    this.carro_id = undefined;
    this.distancia = 0;
    this.combustivel = '1';
    this.quantidadeLitros = 0;
  }

  async buscarCarros() {
    this.carros = await this._carroService.listar();
    console.log(this.carros);
  }

  buscarCarroPorId(carro_id): Carro {
    return this.carros.find((carro) => carro.id == carro_id);
  }

  fazerCalculoLitros() {
    const carro: Carro = this.buscarCarroPorId(this.carro_id);
    console.log(carro);
    // Uma forma de passar o valor do this.combustivel sem o parseint é substituir ele por um +this.combustivel
    // this.quantidadeLitros = this._carroService.calcularLitros( carro, parseInt( this.combustivel ), this.distancia );
    this.quantidadeLitros = this._carroService.calcularLitros(
      carro,
      parseInt(this.combustivel),
      this.distancia
    );
    console.log(this.quantidadeLitros);

    this.mostrarResultado(this.quantidadeLitros);

    // Metodo funcionando, mas sem chamar o metodo do CarroService
    // const carroEncontrado = this.carros.find( (c) => c.id == this.carro_id );

    // if (carroEncontrado) {
    //   this.carro = carroEncontrado;

    //   if (this.combustivel == "1") {
    //     this.quantidadeLitros = Math.round(this.distancia / this.carro.consumoGasolina);
    //   } else {
    //     this.quantidadeLitros = Math.round(this.distancia / this.carro.consumoAlcool);
    //   }
    // } else {
    //   alert('Selecione um dos Carros da lista')
    // }

    // console.log(this.carro);
  }

  async mostrarResultado(resultado: number) {
    const alert = await this._alert.create({
      cssClass: "alert-resultado",
      header: "Qauntidade de Litros",
      message: resultado.toString(),
      buttons: ["OK"],
    });

    await alert.present();
  }
}
