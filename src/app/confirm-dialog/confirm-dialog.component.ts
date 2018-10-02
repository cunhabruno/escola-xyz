import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TurmaDetailComponent} from '../turma-detail/turma-detail.component';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
  providers: [TurmaDetailComponent]
})
export class ConfirmDialogComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() header: string;
  @Input() message: string;
  @Output() event = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onYesClick() {
    this.event.next();
  }
}
