import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { LoginService} from '../service/login.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,LoginRoutingModule,
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }