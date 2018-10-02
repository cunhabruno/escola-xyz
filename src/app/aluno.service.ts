import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Turma} from './turma';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  private alunosUrl = 'api/alunos';

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.alunosUrl);
  }

  getAluno(id: number): Observable<Aluno> {
    const url = `${this.alunosUrl}/${id}`;
    return this.http.get<Aluno>(url);
  }

  addAluno (aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.alunosUrl, aluno, httpOptions);
  }

  updateAluno(aluno: Aluno): Observable<any> {
    return this.http.put(this.alunosUrl, aluno, httpOptions);
  }

  deleteAluno(aluno: Aluno | number): Observable<any> {
    const id = typeof aluno === 'number' ? aluno : aluno.id;
    const url = `${this.alunosUrl}/${id}`;
    return this.http.delete<Aluno>(url, httpOptions);
  }


  searchAluno(term: string): Observable<Aluno[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Aluno[]>(`${this.alunosUrl}/?nome=${term}`);

  }
}
