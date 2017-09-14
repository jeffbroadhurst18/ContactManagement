import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/models';
import { ContactService } from '../service/contact.service';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[];

  constructor(private contactService: ContactService, private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.getContactList();
  }

  getContactList() {
    this.contactService.getContacts().subscribe((data) => this.processContactResponse(data));
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe((data) => console.log('Contact ' + id + ' deleted'));
  }

  processContactResponse(data: Contact[]) {
    this.contactList = data;
  }

  addNew() {
    this.router.navigate(['/contact', 0]);
  }

  logout() {
    this.loginService.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}


