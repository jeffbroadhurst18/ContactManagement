import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
      {
            path: 'login',
            redirectTo: 'login',
            pathMatch: 'full'
      },
      {
            path: 'contact-list',
            redirectTo: 'contact-list',
            pathMatch: 'full'
      },
      {
            path: 'contact',
            redirectTo: 'contact',
            pathMatch: 'full'
      },
      {
            path: '',
            redirectTo: '/page-not-found',
            pathMatch: 'full'
      },
      {
            path: '**',
            redirectTo: '/login',
            pathMatch: 'full'
      }
];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class RoutingModule { }

