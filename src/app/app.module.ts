import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionModule } from '../../projects/ngx-ludan-accordion/src/lib/accordion.module';

@NgModule({
  imports: [BrowserModule, AccordionModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
