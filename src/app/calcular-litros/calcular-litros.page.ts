import { Component, OnInit } from "@angular/core";
import { Carro } from "src/models/Carro";
import { CarroService } from "src/services/CarroService";

@Component({
  selector: "app-calcular-litros",
  templateUrl: "./calcular-litros.page.html",
  styleUrls: ["./calcular-litros.page.scss"],
})
export class CalcularLitrosPage implements OnInit {
  public distancia: number = 0;
  public combustivel: string = "1";
  public carro_id: number;
  public carros: Carro[] = new Array<Carro>();
  public carro: Carro = new Carro();
  public totalLitros: number = 0;

  constructor(private _carroService: CarroService) {
    this.buscarCarros();
  }

  ngOnInit() {}

  async buscarCarros() {
    this.carros = await this._carroService.listar();
    console.log(this.carros);
  }

  fazerCalculoLitros() {
    const carroEncontrado = this.carros.find((c) => c.id == this.carro_id);

    if (carroEncontrado) {
      this.carro = carroEncontrado;

      if (this.combustivel == "1") {
        this.totalLitros = Math.round(this.distancia / this.carro.consumoGasolina);
      } else {
        this.totalLitros = Math.round(this.distancia / this.carro.consumoAlcool);
      }
    } else {
      alert('Selecione um dos Carros da lista')
    }

    console.log(this.carro);
  }
}
