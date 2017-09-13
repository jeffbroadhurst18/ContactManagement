import { Injectable, Inject } from '@angular/core';
import { Contact } from '../model/models';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { APP_CONFIG } from '../api-provider/app.apiconfig';
import { AppConfig } from '../api-provider/IAppConfig';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
  contacts: Array<Contact>;
  contact: Contact;
  baseUrl: string;
  constructor(private http: Http,
    @Inject(APP_CONFIG) private config: AppConfig) {
    this.baseUrl = 'api/contact';
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get(this.config.apiEndPoint + this.baseUrl).map((res: Response) => res.json());
  }

  addContact(contact: Contact) {
    return this.http.post(this.config.apiEndPoint + this.baseUrl, JSON.stringify(contact), this.getRequestOptions())
      .map((res: Response) => res.json());
  }

  updateContact(contact: Contact) {
    return this.http.put(this.config.apiEndPoint + this.baseUrl, JSON.stringify(contact), this.getRequestOptions())
      .map((res: Response) => res.json());
  }

  getContact(id: number) {
    return this.http.get(this.config.apiEndPoint + this.baseUrl + '/' + id, this.getRequestOptions())
      .map((res: Response) => res.json());
  }

  deleteContact(id: number) {
    return this.http.delete(this.config.apiEndPoint + this.baseUrl + '/' + id, this.getRequestOptions()).
      map((res: Response) => res.json());

  }

  private getRequestOptions() {
    return new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  }
}
