import { Component, Input } from '@angular/core';

import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'ludan-accordion-group',
  styleUrls: ['./accordion-group.component.scss'],
  template: `
    <div
      class="accordion-group"
      [ngClass]="{ closed: !isOpen, first: index === 0 }"
    >
      <div class="panel-heading" (click)="toggleOpen()">
        <ng-content select=".header"></ng-content>
      </div>
      <div class="panel-collapse">
        <div class="panel-body">
          <ng-content select=".body"></ng-content>
        </div>
      </div>
    </div>
  `
})
export class AccordionGroupComponent {
  @Input() isOpen: boolean;
  @Input() index: number;

  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
  }

  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.accordion.closeOthers(this);
    } else {
      this.isOpen = false;
    }
  }
}
