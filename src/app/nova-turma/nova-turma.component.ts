import { Component, OnInit } from '@angular/core';
import {Turma} from '../turma';
import {Aluno} from '../aluno';
import {TurmaService} from '../turma.service';
import {MatSnackBar} from '@angular/material';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nova-turma',
  templateUrl: './nova-turma.component.html',
  styleUrls: ['./nova-turma.component.css']
})
export class NovaTurmaComponent implements OnInit {

  model = {nome: '', professor: ''};

  submitted = false;

  constructor(
    private turmaService: TurmaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const nome = this.model.nome;
    const professor = this.model.professor;
    this.turmaService.addTurma({nome, professor} as Turma).subscribe();
    this.turmaService.getTurmas().subscribe(turmas => console.log(turmas));
    this.submitted = true;
    this.snackBar.open('Turma ' + this.model.nome + ' adicionada.', 'Ok', {duration: 5000});
    // this.router.navigate(['/turmas']);
    setTimeout(() => { this.router.navigate(['/turmas']); }, 5000);
  }

}
