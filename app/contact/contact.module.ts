import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing.module';
import { ContactService} from '../service/contact.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,ContactRoutingModule
  ],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }

