import { AccordionComponent } from '../accordion.component';
import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

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
export class AccordionGroupComponent implements OnChanges {
  @Input() heading: string;
  @Input() isOpen: boolean;
  @Input() index: number;

  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];

        if (!changedProp.isFirstChange()) {
          this.accordion.groups[this.index + 1].toggleOpen();
        }
      }
    }
  }

  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.accordion.closeOthers(this);
    }
  }
}
