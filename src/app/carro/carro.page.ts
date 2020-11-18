import { CarroService } from "src/services/CarroService";
import { Carro } from "src/models/Carro";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-carro",
  templateUrl: "./carro.page.html",
  styleUrls: ["./carro.page.scss"],
})
export class CarroPage implements OnInit {
  public carro_id: Number;
  public carro: Carro = new Carro();
  public ListaCarros: Carro[] = new Array<Carro>();

  constructor(
    private _carroService: CarroService,
    private _router: ActivatedRoute,
    private _nav: Router
  ) {
    this.ListaCarros = this._carroService.carros;
    this._router.params.subscribe((params) => {
      this.carro_id = parseInt(params.carroId);
      console.log(this.carro_id);
      this.obterCarro();
    });
  }

  ngOnInit() {}

  obterCarro() {
    const carroEncntrado = this.ListaCarros.find((c) => c.id === this.carro_id);
    if (carroEncntrado) {
      this.carro = carroEncntrado;
    } else {
      this._nav.navigate(["/lista-carros"]);
    }
  }
}
