import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import {AuthGuard} from '../auth/auth.guard';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'contact/:id', component: ContactComponent, canActivate: [AuthGuard], }
  ])],
  exports: [RouterModule]
})
export class ContactRoutingModule {}