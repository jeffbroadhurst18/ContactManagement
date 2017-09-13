import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing.module';
import { ContactService} from '../service/contact.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,ContactRoutingModule,ReactiveFormsModule
  ],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }

