import { CarroService } from "src/services/CarroService";
import { Carro } from "src/models/Carro";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-cadastrar-carro",
  templateUrl: "./cadastrar-carro.page.html",
  styleUrls: ["./cadastrar-carro.page.scss"],
})
export class CadastrarCarroPage implements OnInit {
  public carro: Carro = new Carro();
  private _htmlLoading: HTMLIonLoadingElement

  constructor(
    public _carrosService: CarroService,
    private _router: Router,
    private _loading: LoadingController
  ) {}

  ngOnInit() {}

  async carregando() {
    // Criar Loading para sugerir que ainda está tentando criar o carro no DB
    this._htmlLoading = await this._loading.create({
      cssClass: "my-custom-class",
      message: "Aguarde...",
      id: 'custon-loading'
    });
    await this._htmlLoading.present();
  }

  cadastrarCarro() {
    this.carregando();
    this._carrosService.cadastrar(this.carro).subscribe((res) => {
      console.log(res);
      this._htmlLoading.dismiss(); 
      this._router.navigate(["/lista-carros"]);
    });
  }
}
