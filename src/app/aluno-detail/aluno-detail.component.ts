import { Component, OnInit } from '@angular/core';
import {AlunoService} from '../aluno.service';
import { ActivatedRoute } from '@angular/router';
import {Aluno} from '../aluno';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Turma} from '../turma';
import {TurmaService} from '../turma.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {
  turmasControl = new FormControl();
  selectedTurmas = [];
  turmas: Turma[];
  aluno: Aluno = {id: 0, nome: '', cpf: '', dataNascimento: '', genero: '', turmas: []};
  editMode = false;
  constructor(
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.turmaService.getTurmas().subscribe(turmas => { this.turmas = turmas; });
    const id = +this.route.snapshot.paramMap.get('id');
    this.alunoService.getAluno(id).subscribe(aluno => { this.aluno = aluno; this.setSelectedTurmas(); });
    this.route
      .data
      .subscribe(v => { this.editMode = v.editMode; });
  }

  update() {
    this.alunoService.updateAluno(this.aluno).subscribe();
    this.editMode = false;
    this.snackBar.open('Mudanças efetuadas', 'Ok', {duration: 5000});
  }

  delete() {
    this.alunoService.deleteAluno(this.aluno).subscribe();
    this.snackBar.open('Aluno ' + this.aluno.nome + ' removido', 'Ok', {duration: 5000});
    this.location.back();
  }

  setSelectedTurmas() {
    this.aluno.turmas.forEach(idTurma => {
      console.log(idTurma);
      this.turmaService.getTurma(idTurma).subscribe(turma => { this.selectedTurmas.push(turma); });
    });
  }

  alunoHasTurma(id: number) {
    return this.turmas.filter(turma => turma.id === id );
  }
}
