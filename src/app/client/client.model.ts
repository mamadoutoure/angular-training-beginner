import {ContactModel} from '../contact-type/contact.model';
import {AddressModel} from '../address/address.model';

export interface ClientModel {

  customerCode: string;
  firstName: string;
  lastName: string;
  dob: string;
  pob: string;
  address: AddressModel;
  contacts: ContactModel[];
}
