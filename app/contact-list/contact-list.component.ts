import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/models';
import { ContactService} from '../service/contact.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[];

  constructor(private contactService: ContactService, private router:Router) { }

  ngOnInit() {
    this.getContactList();
  }

  getContactList() {
      this.contactList = this.contactService.getContacts();
  }

  addNew() {
     this.router.navigate(['/contact',0]);
  }
}


