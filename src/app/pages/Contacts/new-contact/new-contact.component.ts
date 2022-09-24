import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styles: [],
})
export class NewContactComponent {
  constructor(private CS: ContactService, private router: Router) {}

  onSubmit(contact: Contact) {
    this.CS.add(contact, () => this.router.navigate(['/contacts']));
  }
}
