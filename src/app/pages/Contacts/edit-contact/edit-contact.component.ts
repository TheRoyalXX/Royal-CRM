import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styles: [],
})
export class EditContactComponent implements OnInit {
  contact: Contact | void = undefined;
  id: string | null = null;
  createdAt: Date | void = undefined;
  dataReceived: boolean = false;

  constructor(
    private CS: ContactService,
    private AR: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(contact: Contact) {
    contact.createdAt = this.createdAt!;
    this.CS.edit(contact, this.id!, () =>
      this.router.navigate(['/contacts'])
    );
  }

  resetForm() {
    this.CS.getCustomer(this.id!, (contact: Contact) => {
      this.contact = contact;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getCustomer(id!, (contact: Contact) => {
        this.contact = contact;
        this.createdAt = contact.createdAt;
        this.dataReceived = true;
      });
    });
  }
}
