import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list.component';
import { AuthGuard} from '../auth/auth.guard';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'contact-list', component: ContactListComponent, canActivate: [AuthGuard], }
  ])],
  exports: [RouterModule]
})
export class ContactListRoutingModule {}