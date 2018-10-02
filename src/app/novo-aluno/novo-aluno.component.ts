import { Component, OnInit } from '@angular/core';

import { Aluno } from '../aluno';
import { Turma } from '../turma';
import { TurmaService } from '../turma.service';
import {FormControl} from '@angular/forms';
import {AlunoService} from '../aluno.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-novo-aluno',
  templateUrl: './novo-aluno.component.html',
  styleUrls: ['./novo-aluno.component.css']
})
export class NovoAlunoComponent implements OnInit {

  turmasControl = new FormControl();
  turmas: Turma[];
  aluno: Aluno = {id: 0, nome: '', cpf: '', dataNascimento: '', genero: '', turmas: []};

  submitted = false;

  constructor(
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getTurmas();
  }

  onSubmit() {
    this.aluno.turmas = this.turmasControl.value;
    const { nome, dataNascimento, turmas } = this.aluno;
    this.submitted = true;
    this.alunoService.addAluno({ nome, dataNascimento, turmas } as Aluno).subscribe();
    this.snackBar.open('Aluno ' + this.aluno.nome + ' adicionado', 'Ok', {duration: 5000});
    this.router.navigate(['/alunos']);
  }

  get diagnostic() { return JSON.stringify(this.aluno); }

  getTurmas(): void {
    this.turmaService.getTurmas().subscribe(turmas => this.turmas = turmas);
  }

}
