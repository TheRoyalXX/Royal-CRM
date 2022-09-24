import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss']
})
export class DecoratorsComponent {
@Input() text: string = "hello israel";
}
