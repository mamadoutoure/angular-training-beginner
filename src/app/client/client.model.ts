import {ContactModel} from './contact.model';
import {AddressModel} from '../address/address.model';

export interface ClientModel {

  id?: number;
  code?: string;
  firstName: string;
  lastName: string;
  dob: string;
  pob: string;
  address: AddressModel;
  contacts: ContactModel[];
}
