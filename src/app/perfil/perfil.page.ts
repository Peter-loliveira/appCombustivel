import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/services/UsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor( 
    private _usuarioService: UsuarioService,
    private _alertController: AlertController
    ) {
    
  }
  
  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.usuario = this._usuarioService.retornarUsuarioLogado();
  }

  atualiarUsuario(){
    this._usuarioService.atualizar(this.usuario).subscribe(res => {
      console.log(res);
    if(res) {
      this._usuarioService.logar(res);
      this.mostraAlertaSucesso()
    }
    })
  }

  
    async mostraAlertaSucesso() {
      const alert = await this._alertController.create({
        cssClass: 'modal-sucesso',
        header: 'Cadastro atualizado com sucesso!',
        message: 'Seus dados foram alterados.',
        buttons: ['Fechar']
      });
  
      await alert.present();
    }
  }
