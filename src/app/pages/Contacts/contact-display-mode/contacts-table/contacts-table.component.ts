import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../contact';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'contacts-table',
  templateUrl: './contacts-table.component.html',
  styles: [],
})
export class ContactsTableComponent {
  @Input() contacts: Contact[] = [];
  @Output() onDeleteContact = new EventEmitter();

  constructor(private CS: ContactService) {}

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.CS.getAll((contact: Contact[]) => {
      this.contacts = contact;
      this.onDeleteContact.emit(contact);
    });
  }
}
