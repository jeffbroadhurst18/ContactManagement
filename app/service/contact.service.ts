import { Injectable } from '@angular/core';
import { Contact } from '../model/models';

@Injectable()
export class ContactService {
  contacts: Array<Contact>;
  contact:Contact;
  constructor() { }

  public getContacts(): Contact[] {

    this.contact = this.generateContact();

    this.contacts = new Array<Contact>();
    this.contacts.push(this.contact);

    return this.contacts;
  }

  public getContact(id: number) {
    return this.generateContact();
  }

  public saveContact() {
    console.log('Save contact');
  }

  private generateContact(): Contact {
    let contact = new Contact();
    contact.id = 1;
    contact.name = 'Jeff';
    contact.dob = new Date(2000, 1, 1);
    contact.city = 'London';
    contact.telephone = '0208 123 1234';
    return contact;
  }
}
