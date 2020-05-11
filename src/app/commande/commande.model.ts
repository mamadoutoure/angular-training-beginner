import {CommandDetailsModel} from './command-details.model';


export interface CommandModel {

  id?: number;
  clientId: string;
  date: string;
  commandDetails: CommandDetailsModel[];

}
