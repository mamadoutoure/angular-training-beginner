import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactTypeModel} from './contactType.model';

@Injectable()
export class ContactTypeService {
  apiUrl = environment.apiUrl;
  contactTypeEndpoint = 'contact-types/';



  constructor(private http: HttpClient) { }

  getContactTypes(): Observable<ContactTypeModel[]> {
    return this.http.get<ContactTypeModel[]>(this.apiUrl + this.contactTypeEndpoint);

  }
}
