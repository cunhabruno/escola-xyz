import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Turma} from '../turma';
import {TurmaService} from '../turma.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-turma-detail',
  templateUrl: './turma-detail.component.html',
  styleUrls: ['./turma-detail.component.css']
})
export class TurmaDetailComponent implements OnInit {
  turma: Turma = {id: 0, nome: '', professor: '', turno: ''};
  editMode = false;
  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.turmaService.getTurma(id).subscribe(turma => { this.turma = turma; });
    this.route
      .data
      .subscribe(v => { this.editMode = v.editMode; });
  }

  update() {
    this.turmaService.updateTurma(this.turma).subscribe();
    this.snackBar.open('Mudanças efetuadas!', 'Ok', {duration: 5000});
    this.editMode = false;
  }

  delete() {
    this.turmaService.deleteTurma(this.turma).subscribe();
    this.snackBar.open('Turma ' + this.turma.nome + ' Removida', 'Ok', {duration: 5000});
    this.location.back();
  }

}
