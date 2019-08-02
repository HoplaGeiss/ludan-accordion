import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ludan-accordion>
      <ludan-accordion-group *ngFor="let i of groups" [index]="i">
        <div class="header">Header {{ i }}</div>
        <div class="body">Content {{ i }}</div>
      </ludan-accordion-group>
    </ludan-accordion>
  `
})
export class AppComponent {
  groups = [1, 2, 3, 4];
}
