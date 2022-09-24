import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-header-contacts',
  templateUrl: './page-header-contacts.component.html',
  styles: [],
})
export class PageHeaderContactsComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = '';
  @Input() bgColor: string = 'alert-primary rounded-3 p-2';
}
