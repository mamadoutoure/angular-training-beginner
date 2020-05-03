import {ContactModel} from './contact.model';

export class ClientModel {

  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  pob: string;
  address: string;
  contacts: ContactModel[];
}
