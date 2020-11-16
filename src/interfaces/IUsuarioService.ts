import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';

export interface IUsuarioService {
    cadastrar(usuario: Usuario) : Observable<Usuario>;
    atualizar(usuario: Usuario) : Observable<Usuario>;
    logar(usuario: Usuario) : void;
    logout(): void;
    retornarUsuarioLogado() : Usuario;
    buscarUsuario(): Observable<Usuario>;
}