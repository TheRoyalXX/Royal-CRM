import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() contact: Contact = {
    firstName: '',
    lastName: '',
    birthday: '',
    color: '',
    email: '',
    phone: '',
    address: {
      state: '',
      country: '',
      city: '',
      street: '',
      houseNumber: 0,
      zip: 0,
    },
    notes: '',
  };

  @Input() btnText: string = 'submit';

  onSubmit({ valid, value }: NgForm) {
    if (valid) this.submit.emit(value);
  }

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthday: '',
      color: '',
      address: {
        state: '',
        country: '',
        city: '',
        street: '',
        houseNumber: 0,
        zip: 0,
      },
      notes: '',
    });
    this.reset.emit();
  }
}
