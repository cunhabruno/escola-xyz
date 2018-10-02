import { Component, OnInit } from '@angular/core';

import { TurmaService } from '../turma.service';
import {Turma} from '../turma';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
  turmas: Turma[];
  constructor(private turmaService: TurmaService) {  }

  ngOnInit() {
    this.getTurmas();
  }

  getTurmas(): void {
    this.turmaService.getTurmas().subscribe(turmas => this.turmas = turmas);
  }

  filter(term: string) {
    this.turmaService.searchTurma(term).subscribe(turmas => this.turmas = turmas);
    if (!term) {
      this.getTurmas();
    }
  }

}
