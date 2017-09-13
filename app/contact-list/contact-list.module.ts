import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactListComponent } from './contact-list.component';
import { ContactListRoutingModule } from './contact-list.routing.module';
import { ContactService} from '../service/contact.service';
import { ContactModule } from '../contact/contact.module';
import { ContactRoutingModule} from '../contact/contact.routing.module';

@NgModule({
  imports: [
    CommonModule,FormsModule,ContactListRoutingModule,ContactModule, ContactRoutingModule,
  ],
  declarations: [ContactListComponent],
  providers: [ContactService]
})
export class ContactListModule { }