import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/services/UsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Injectable } from '@angular/core';
import { ICarroService } from 'src/interfaces/ICarroService';
import { Carro } from 'src/models/Carro';
import { Observable } from 'rxjs';
import { Global } from 'src/shared/Global';

@Injectable({
    providedIn:'root'
})
export class CarroService implements ICarroService {

    public apiUrl: string = Global.ApiUrl + "carros";
    private _usuarioLogado: Usuario = new Usuario();
    public carros: Carro[] = [];

    constructor( 
        private _usuarioService: 
        UsuarioService, 
        private _http: HttpClient ) {

        this._usuarioLogado = this._usuarioService.retornarUsuarioLogado()

    }

    cadastrar(carro: Carro): Observable<Carro> {
        if(!carro.modelo) throw new Error('O capo MODELO é obrigatório!')
        if(!carro.montadora) throw new Error('O capo MONTADORA é obrigatório!')
        if(!carro.consumoAlcool) throw new Error('O capo de COMSUMO NO ALCOOL é obrigatório!')
        if(!carro.consumoGasolina) throw new Error('O capo de COMSUMO NO GASOLINA é obrigatório!')
        carro.usuario_id = this._usuarioLogado.id

        console.log(carro);

        return this._http.post<Carro>(this.apiUrl, carro)
    }
    
    remover(carro_id: number): void {
        throw new Error("Method not implemented.");
    }
    editar(carro: Carro): Observable<Carro> {
        throw new Error("Method not implemented.");
    }

    listar(): Promise<Carro[]> {
        const promise = new Promise<Carro[]>(async (resolve, reject) => {
            try { 
                const usuario = await this._usuarioService.buscarUsuario().toPromise();
                resolve(usuario.carros);    

            } catch(e) {
               reject(e); 
            }
        });
        return promise;
    }

    buscar(carro_id: number): Observable<Carro> {
        throw new Error("Method not implemented.");
    }
    calcularLitros(carro: Carro, tipoCombustivel: number, distancia: number): number {
        throw new Error("Method not implemented.");
    }

}