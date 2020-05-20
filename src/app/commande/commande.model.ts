import {CommandDetailsModel} from './command-details.model';


export interface CommandModel {

  commandCode: string;
  customerCode: string;
  commandDate: string;
  commandDetails: CommandDetailsModel[];

}
