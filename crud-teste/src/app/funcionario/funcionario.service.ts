import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Funcionario} from './funcionario';
import {environment} from '../../environments/environment';

const urlFuncionario = environment.urlApi + '/funcionario';

@Injectable()
export class FuncionarioService {

  constructor(private http: HttpClient){}

  listAllFuncionario(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(urlFuncionario);
  }

  saveFuncionario(funcionario: Funcionario): Observable<Funcionario> {

    return this.http.post<Funcionario>(urlFuncionario, funcionario);
  }

  deleteFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    const url = urlFuncionario + '/' + funcionario.id;
    return this.http.delete<Funcionario>(url);
  }
}
