import { Person } from './../../models/Profile';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() person: Person;

  @Input() show: boolean;

  @Output() clearPerson = new EventEmitter<string>();

  closeModal(): void {
    this.show = false;
    this.clearPerson.emit(null);
  }
}
