import {LineItemModel} from './lineIterm.model';


export class CommandModel {

  id: number;
  clientId: string;
  date: string;
  items: LineItemModel[];

}
