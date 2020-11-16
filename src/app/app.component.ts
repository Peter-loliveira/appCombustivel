import { Usuario } from "./../models/Usuario";
import { Router } from "@angular/router";
import { UsuarioService } from "src/services/UsuarioService";
import { Component, OnInit } from "@angular/core";

import { MenuController, Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Perfil",
      url: "/perfil",
      icon: "person-circle",
    },
    {
      title: "Carros",
      url: "/lista-carros",
      icon: "car-sport",
    },
    {
      title: "Cadastrar Carro",
      url: "/cadastrar-carro",
      icon: "car",
    },
    {
      title: "Calcular Litros",
      url: "/calcular-litros",
      icon: "calculator",
    },
  ];
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _usuarioService: UsuarioService, // Usado para podermos usar o metodo logof do serviço
    private _menu: MenuController, //Usado para pdoermos ter acesso às propriedade do menu
    private _router: Router // Usado para podermos usar as rotas e direcionar para determinada página
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }

  logout() {
    // Limpar Local Storage
    this._usuarioService.logout();

    // Bloquear arraste do Menu
    this._menu.swipeGesture(false);
    // this._menu.close();

    // Direcionar para página de login
    this._router.navigate(["/login"]);
    console.log(localStorage);
  }
}
