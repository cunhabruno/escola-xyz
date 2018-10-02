import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatCardModule, MatButtonModule, TooltipComponent, MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { NovoAlunoComponent } from './novo-aluno/novo-aluno.component';
import { NovaTurmaComponent } from './nova-turma/nova-turma.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TurmasComponent } from './turmas/turmas.component';
import { AppRoutingModule } from './app-routing.module';
import { TurmaDetailComponent } from './turma-detail/turma-detail.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {NgxMaskModule} from 'ngx-mask';
import { SearchComponent } from './search/search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    NovoAlunoComponent,
    NovaTurmaComponent,
    TurmasComponent,
    TurmaDetailComponent,
    AlunoDetailComponent,
    ConfirmDialogComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    MatTooltipModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
