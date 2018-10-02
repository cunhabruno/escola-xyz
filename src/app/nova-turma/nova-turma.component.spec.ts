import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTurmaComponent } from './nova-turma.component';

describe('NovaTurmaComponent', () => {
  let component: NovaTurmaComponent;
  let fixture: ComponentFixture<NovaTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
