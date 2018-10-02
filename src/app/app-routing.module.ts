import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmasComponent } from './turmas/turmas.component';
import {AlunosComponent} from './alunos/alunos.component';
import {NovaTurmaComponent} from './nova-turma/nova-turma.component';
import {NovoAlunoComponent} from './novo-aluno/novo-aluno.component';
import {TurmaDetailComponent} from './turma-detail/turma-detail.component';
import {AlunoDetailComponent} from './aluno-detail/aluno-detail.component';

const routes: Routes = [
  { path: 'turmas', component: TurmasComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'novaTurma', component: NovaTurmaComponent },
  { path: 'novoAluno', component: NovoAlunoComponent },
  { path: 'turmaDetail/:id', component: TurmaDetailComponent },
  { path: 'turmaDetail/:id/edit', component: TurmaDetailComponent, data : { editMode: true }},
  { path: 'alunoDetail/:id', component: AlunoDetailComponent },
  { path: 'alunoDetail/:id/edit', component: AlunoDetailComponent, data : {editMode: true}}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
