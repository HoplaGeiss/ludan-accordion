import { CommonModule } from '@angular/common';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent, AccordionGroupComponent],
  exports: [AccordionComponent, AccordionGroupComponent]
})
export class AccordionModule {}
