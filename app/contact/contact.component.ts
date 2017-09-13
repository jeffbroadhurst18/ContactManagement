import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/models';
import { ContactService } from '../service/contact.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  contactId: number;

  constructor(private route: ActivatedRoute, private contactService: ContactService,
  private router: Router) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => this.contactId = + data.get('id'));
    if (this.contactId === 0) {
      this.contact = new Contact();
    } else {
    this.contact = this.contactService.getContact(this.contactId);
    }
  }

  submit() {
    console.log(this.contact)
    this.contact = new Contact();
  }

  cancel() {
    this.router.navigate(['/contact-list']);
  }

}
