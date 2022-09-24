import { Component, Input } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'contacts-folders',
  templateUrl: './contacts-folders.component.html',
  styles: [],
})
export class ContactsFoldersComponent {
  @Input() contact: Array<Contact> = [];
}
