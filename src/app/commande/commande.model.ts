import {CommandDetailsModel} from './command-details.model';


export interface CommandModel {

  code: string;
  clientCode: string;
  commandDate: string;
  commandDetails: CommandDetailsModel[];

}
