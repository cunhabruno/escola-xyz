import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Turma} from '../turma';
import {Aluno} from '../aluno';
import {AlunoService} from '../aluno.service';
import {TurmaService} from '../turma.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  alunos$: Observable<Aluno[]>;
  turmas$: Observable<Turma []>;
  @Input() searchData: any;
  @Input() term: string;
  private searchTerms = new Subject<string>();
  constructor(
    private alunoService: AlunoService,
    private turmaService: TurmaService
  ) { }

  search() {
    this.searchTerms.next(this.term);
  }

  clear() {
    this.term = '';
  }

  ngOnInit() {
      this.turmas$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.turmaService.searchTurma(term)),
      );
      this.alunos$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.alunoService.searchAluno(term)),
      );

  }

}
