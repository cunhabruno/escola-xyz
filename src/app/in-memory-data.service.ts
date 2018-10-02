import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const turmas = [
      {id: 1, nome: 'SO', professor: 'Elgio'},
      {id: 2, nome: 'PSO', professor: 'Rolland'},
      {id: 3, nome: 'ALGO1', professor: 'Adelina'},
      {id: 4, nome: 'ALGO2', professor: 'Adelina'},
      {id: 5, nome: 'Banco', professor: 'Leonardo'},
      {id: 6, nome: 'JavaI', professor: 'Tales'}
    ];
    const alunos = [
      {id: 1, nome: 'Abreu', dataNascimento: '21/05/1990', turmas: [1, 2]},
      {id: 2, nome: 'Flavia', dataNascimento: '01/09/1980', turmas: [3, 1]}
    ];

    return {turmas, alunos};
  }
}
