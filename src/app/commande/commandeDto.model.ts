import {CommandDetailsModel} from './command-details.model';


export interface CommandDtoModel {

  commandCode: string;
  customerCode: string;
  customerName: string;
  commandDate: string;
  commandLinesItems: [
    {
      price:	number;
      productCode:	string;
      productName:	string;
      quantity: number;
    }
    ];

}
