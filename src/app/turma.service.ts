import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError} from 'rxjs/operators';
import { Turma } from './turma';
import { Observable, of} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private http: HttpClient) { }

  private turmasUrl = 'api/turmas';

  getTurmas(): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.turmasUrl);
  }

  getTurma(id: number): Observable<Turma> {
    const url = `${this.turmasUrl}/${id}`;
    return this.http.get<Turma>(url);
  }

  addTurma (turma: Turma): Observable<Turma> {
    return this.http.post<Turma>(this.turmasUrl, turma, httpOptions);
  }

  updateTurma(turma: Turma): Observable<any> {
    return this.http.put(this.turmasUrl, turma, httpOptions);
  }

  deleteTurma(turma: Turma | number): Observable<any> {
    const id = typeof turma === 'number' ? turma : turma.id;
    const url = `${this.turmasUrl}/${id}`;
    return this.http.delete<Turma>(url, httpOptions);
  }

  searchTurma(term: string): Observable<Turma[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Turma[]>(`${this.turmasUrl}/?nome=${term}`);

  }

}
