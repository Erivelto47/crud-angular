import {Component, OnInit} from '@angular/core';
import {Funcionario} from './funcionario';
import {FuncionarioService} from './funcionario.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  displayDialog: boolean;

  funcionario: Funcionario = new Funcionario();

  selectedEmployer: Funcionario;

  newFuncionario: boolean;

  funcionarios: Funcionario[] = [];

  cols: any[];

  constructor(private funcionarioService: FuncionarioService, private messageService: MessageService) {
  }

  ngOnInit() {

    this.cols = [
      {field: 'nome', header: 'Nome'},
      {field: 'sobrenome', header: 'Sobrenome'},
      {field: 'email', header: 'Email'},
      {field: 'nis', header: 'Nis'}
    ];

    this.funcionarioService.listAllFuncionario().subscribe(value => this.funcionarios = value,
        error1 => this.addMsg('Lista', 'Não há funcionarios ára listar.', 'warn'));

  }

  showDialogToAdd() {
    this.newFuncionario = true;
    this.funcionario = new Funcionario();
    this.displayDialog = true;
  }

  save() {
    let employers = [...this.funcionarios];
    if (this.newFuncionario) {
      this.funcionarioService.saveFuncionario(this.funcionario).subscribe(value => {
        console.log(value);
        this.funcionario = value;
        employers.push(this.funcionario);
        this.addMsg('Sucesso!', 'Funcionario salvo.', 'success');
        this.displayDialog = false;
        this.funcionario = null;
      }, error1 => {
        error1.error.forEach(f => {
          this.addMsg('Erro', f, 'error');
        });
        this.displayDialog = true;
      });
    } else {
      this.funcionarioService.saveFuncionario(this.funcionario).subscribe(value => {
        employers[this.funcionarios.indexOf(this.selectedEmployer)] = this.funcionario;
        console.log(value);
      }, error1 => console.log(error1.data));


    }
    this.funcionarios = employers;

  }

  delete() {
    let index = this.funcionarios.indexOf(this.selectedEmployer);
    this.funcionarioService.deleteFuncionario(this.selectedEmployer).subscribe(value => {
      this.addMsg('Okay!', 'Funcionario removido.', 'info')
      }, error1 => {
      this.addMsg('Erro!', 'Não foi possível remover o Funcionario.', 'info')
    });
    this.funcionarios = this.funcionarios.filter((val, i) => i != index);
    this.funcionario = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newFuncionario = false;
    this.funcionario = this.cloneFuncionario(event.data);
    this.displayDialog = true;
  }

  cloneFuncionario(f: Funcionario): Funcionario {
    let employer = new Funcionario();
    for (let prop in f) {
      employer[prop] = f[prop];
    }
    return employer;
  }

  addMsg(titulo: string, mensagem: string, type: string) {
    this.messageService.add({severity: type, summary: titulo, detail: mensagem});
  }



}
