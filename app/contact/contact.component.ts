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

  constructor(private route: ActivatedRoute, private contactService: ContactService,
    private router: Router, private fb: FormBuilder) {
    this.contact = new Contact();
    this.isNew = false;
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

  // buildForm() {
  //   this.contactForm = this.fb.group({
  //     'id': [this.contact.id, Validators.required],
  //     'name': [this.contact.name, Validators.required],
  //     'dob': [this.contact.dob, Validators.required],
  //     'telephone': [this.contact.telephone, Validators.required],
  //     'city': [this.contact.city, Validators.required],
  //   });
  // }

  updateForm() {
    var tempDate = new Date(this.contact[0].dob);
    this.contactForm.controls['id'].patchValue(this.contact[0].id);
    this.contactForm.controls['name'].patchValue(this.contact[0].name);
    this.contactForm.controls['dob'].patchValue(this.contact[0].dob);
    this.contactForm.controls['telephone'].patchValue(this.contact[0].telephone);
    this.contactForm.controls['city'].patchValue(this.contact[0].city);
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

  processContactResponse(data: Contact) {
    this.contact = data;
    this.updateForm();
  }

  submit() {
    this.newContact = new Contact()
    this.newContact.id = this.contactForm.controls['id'].value;
    this.newContact.name = this.contactForm.controls['name'].value;
    this.newContact.dob = this.contactForm.controls['dob'].value;
    this.newContact.telephone = this.contactForm.controls['telephone'].value;
    this.newContact.city = this.contactForm.controls['city'].value;
    if (this.isNew) {
      this.contactService.addContact(this.newContact).subscribe((data) => this.afterSave());
    } else {
      this.contactService.updateContact(this.newContact).subscribe((data) => this.afterSave());
    }
  }

  afterSave() {
   this.router.navigate(['/contact-list']);
  }

  cancel() {
    this.router.navigate(['/contact-list']);
  }

}
