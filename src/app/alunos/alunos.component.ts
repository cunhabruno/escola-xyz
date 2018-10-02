import { Component, OnInit } from '@angular/core';

import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[];
  fetched = false;
  constructor(private alunoService: AlunoService ) { }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunoService.getAlunos().subscribe(alunos => this.alunos = alunos);
    this.fetched = true;
  }

  filter(term: string) {
    this.alunoService.searchAluno(term).subscribe(alunos => this.alunos = alunos);
    if (!term) {
      this.getAlunos();
    }
  }

}
