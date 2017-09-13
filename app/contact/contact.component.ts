import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/models';
import { ContactService } from '../service/contact.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  newContact: Contact;
  contactId: number;
  contactForm: FormGroup;
  isNew: Boolean;
  hideLog: Boolean;

  constructor(private route: ActivatedRoute, private contactService: ContactService,
    private router: Router, private fb: FormBuilder) {
    this.contact = new Contact();
    this.isNew = false;
    this.hideLog = true;
  }

  ngOnInit() {
    this.buildForm();
    this.route.paramMap.subscribe((data) => this.contactId = + data.get('id'));
    if (this.contactId === 0) {
      this.contact = new Contact();
      this.isNew = true
    } else {
      this.contactService.getContact(this.contactId).subscribe((data) => this.processContactResponse(data));
    }
  }

  buildForm() {
    this.contactForm = this.fb.group({
      'id': ['', Validators.required],
      'name': ['', Validators.required],
      'dob': ['', Validators.required],
      'telephone': ['', Validators.required],
      'city': ['', Validators.required],
    });
  }

  processContactResponse(data: any[]) {
    this.contact.id = data[0].id;
    this.contact.name = data[0].name;
    this.contact.dob = data[0].dob;
    this.contact.telephone = data[0].telephone;
    this.contact.city = data[0].city;
  }

  submit() {
    if (this.isNew) {
      this.contactService.addContact(this.contact).subscribe((data) => this.afterSave());
    } else {
      this.contactService.updateContact(this.contact).subscribe((data) => this.afterSave());
    }
  }

  afterSave() {
    this.router.navigate(['/contact-list']);
  }

  cancel() {
    this.router.navigate(['/contact-list']);
  }

}
